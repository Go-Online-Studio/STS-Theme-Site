"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { featuredTemplates } from "@/data/templates";

export default function HeroSection() {
  const stageRef = useRef<HTMLDivElement>(null);
  
  // Duplicate items to have a full circular spread of 9 items
  const items = [...featuredTemplates];
  if (items.length > 0) {
    while (items.length < 9) {
      items.push(...featuredTemplates);
    }
  }
  const TOTAL = items.length;

  // Refs for animation state to bypass React re-renders for 60fps buttery smoothness
  const rotationRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartRotationRef = useRef(0);
  const targetRotationRef = useRef<number | null>(null);
  const isHoveredRef = useRef(false);

  // Gaps and Circular Arc Configurations
  const getTransform = (offset: number, stageWidth: number) => {
    const absOff = Math.abs(offset);
    const half = TOTAL / 2;

    const isMobile = stageWidth < 640;
    const isTablet = stageWidth >= 640 && stageWidth < 1024;

    // Adjust target edge bounds & spread multiplier based on screen size
    // Mobile and tablet need to spread out to the very edges of the screen
    const boundsOffset = isMobile ? -25 : isTablet ? -20 : 20;
    const halfW = stageWidth / 2;
    const targetEdgeX = Math.max(50, halfW - boundsOffset);

    const maxAngle = (isMobile ? 70 : isTablet ? 72 : 76) * Math.PI / 180;
    const R = targetEdgeX / Math.sin(maxAngle);

    const theta = (offset / half) * maxAngle;

    // Spread multiplier: original perfect values for laptop/PC; mobile wider for spacing
    const spreadMultiplier = isMobile ? 3.1 : isTablet ? 1.41 : 1.35;
    const tx = R * Math.sin(theta) * spreadMultiplier;

    // Cylinder depth: center is pushed back (tz=20), fanned side cards pull forward (larger tz)
    const tz = isMobile
      ? 20 + Math.min(1.0, absOff) * 110
      : isTablet
      ? 20 + Math.min(2.0, absOff) * 70
      : (R - R * Math.cos(theta)) + 20;

    // Y rotation faces inward towards the center (concave facing)
    // Mobile/tablet side cards slant 38 degrees for 3D fanned perspective
    const ry = isMobile
      ? -Math.sign(offset) * Math.min(1.0, absOff) * 38
      : isTablet
      ? -Math.sign(offset) * Math.min(2.0, absOff) * 22
      : -theta * 1.05 * (180 / Math.PI);

    // Scaling: center card is LARGEST on mobile (scale 0.88), side cards slightly smaller
    // On PC/desktop, preserve the original concave layout (center card smaller, edges larger)
    const sc = isMobile
      ? 0.88 - Math.min(1.0, absOff) * 0.10
      : isTablet
      ? 0.72 + Math.min(2.0, absOff) * 0.13
      : 0.76 + (absOff / half) * 0.24;

    // Responsive Opacity / Visibility: Only 3 cards on mobile, 5 cards on tablet
    // Mobile: cards stay FULLY visible until they physically slide off screen (offset > 2.0)
    // No fade-in / fade-out on mobile — instant on, instant off
    let op = 0;
    if (isMobile) {
      op = absOff <= 2.0 ? 1.0 : 0.0;
    } else if (isTablet) {
      if (absOff <= 2.2) {
        op = 1.0;
      } else if (absOff < 2.5) {
        op = 1.0 - (absOff - 2.2) / 0.3;
      } else {
        op = 0.0;
      }
    } else {
      op = absOff >= half ? 0.0 : (1.0 - (absOff / half) * 0.12);
    }

    // Stack fanned side cards in front of the center card (concave cylinder stacking)
    const zIndex = Math.round(2 + absOff);

    // No blur filter or brightness reduction on mobile/tablet as requested
    const filter = isMobile || isTablet
      ? "none"
      : absOff < 0.5 ? "none" : `brightness(${0.72 + 0.28 * op})`;

    return {
      transform: `translateX(calc(-50% + ${tx}px)) translateZ(${tz}px) rotateY(${ry}deg) scale(${sc})`,
      opacity: op,
      zIndex: zIndex,
      filter: filter,
    };
  };

  const updateLayout = () => {
    if (!stageRef.current) return;
    const stageWidth = stageRef.current.offsetWidth || window.innerWidth;
    const currentRotation = rotationRef.current;
    const half = TOTAL / 2;

    const cardElements = stageRef.current.querySelectorAll(".fan-card");
    cardElements.forEach((card) => {
      const idxStr = card.getAttribute("data-index");
      if (!idxStr) return;
      const index = parseInt(idxStr);
      
      let offset = index - currentRotation;
      // Symmetrical wrapping
      if (offset < -half) offset += TOTAL;
      else if (offset > half) offset -= TOTAL;

      const t = getTransform(offset, stageWidth);
      
      const el = card as HTMLDivElement;
      el.style.transform = t.transform;
      el.style.opacity = t.opacity.toString();
      el.style.zIndex = t.zIndex.toString();
      el.style.filter = t.filter;
      el.style.visibility = t.opacity > 0 ? "visible" : "hidden";
      el.style.pointerEvents = t.opacity > 0.1 ? "auto" : "none";
      el.classList.toggle("active", Math.abs(offset) < 0.5);
    });
  };

  // Main 60fps RequestAnimationFrame Animation loop
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (isDraggingRef.current) {
        // Dragging overrides auto-rotation
        updateLayout();
      } else if (targetRotationRef.current !== null) {
        // Smoothly ease/lerp to target clicked card index
        let diff = targetRotationRef.current - rotationRef.current;
        
        // Shortest path circular difference helper
        if (diff > TOTAL / 2) diff -= TOTAL;
        else if (diff < -TOTAL / 2) diff += TOTAL;

        if (Math.abs(diff) < 0.01) {
          rotationRef.current = targetRotationRef.current;
          targetRotationRef.current = null;
        } else {
          rotationRef.current = (rotationRef.current + diff * 0.08 + TOTAL) % TOTAL;
        }
        updateLayout();
      } else {
        // Continuous smooth rotation (Left to Right flow)
        // Slow down significantly (more time to move)
        const speed = isHoveredRef.current ? 0.001 : 0.003;
        rotationRef.current = (rotationRef.current - speed + TOTAL) % TOTAL;
        updateLayout();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [TOTAL]);

  // Drag / Swipe handlers
  const handleDragStart = (clientX: number) => {
    isDraggingRef.current = true;
    dragStartXRef.current = clientX;
    dragStartRotationRef.current = rotationRef.current;
    targetRotationRef.current = null;
    if (stageRef.current) {
      stageRef.current.classList.add("grabbing");
    }
  };

  const handleDragMove = (clientX: number) => {
    if (!isDraggingRef.current) return;
    const dx = clientX - dragStartXRef.current;
    // Map screen drag pixels to fractional card rotation
    const rotChange = (dx / window.innerWidth) * TOTAL * 0.8;
    rotationRef.current = (dragStartRotationRef.current + rotChange + TOTAL) % TOTAL;
  };

  const handleDragEnd = () => {
    isDraggingRef.current = false;
    if (stageRef.current) {
      stageRef.current.classList.remove("grabbing");
    }
  };

  const goTo = (idx: number) => {
    targetRotationRef.current = idx;
  };

  if (TOTAL === 0) return null;

  return (
    <section 
      className="fan-carousel-section"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; handleDragEnd(); }}
    >
      {/* ── Tagline — fills the empty top space above the carousel ── */}
      <div className="hero-tagline">
        <span className="hero-label">✦ Digital Invitations, Reimagined</span>
        <h1 className="hero-headline">
          Every Event Deserves a{" "}
          <span className="gradient-text">Stunning Invite</span>
        </h1>
        <p className="hero-sub">
          Design, send &amp; track beautiful digital invitations in minutes — no design skills needed.
        </p>
      </div>

      <div
        ref={stageRef}
        className="fan-stage"
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        {items.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="fan-card"
            data-index={i}
            style={{
              transition: "none", // Disable CSS transitions for buttery smooth requestAnimationFrame updates
            }}
            onClick={() => {
              // Only trigger navigation if not dragging
              if (!isDraggingRef.current) {
                goTo(i);
              }
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                sizes="300px"
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
            </div>
            <div className="card-label">
              {item.category} &nbsp;·&nbsp; {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
