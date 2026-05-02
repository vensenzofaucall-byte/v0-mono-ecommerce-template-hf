"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const word = "CAPSULE";

const sideImages = [
  {
    src: "/images/capsule-hallway.jpg",
    alt: "Capsule hotel hallway with green living wall",
    position: "left",
    span: 1,
  },
  {
    src: "/images/capsule-numbers.jpg",
    alt: "Numbered black capsule pods",
    position: "left",
    span: 1,
  },
  {
    src: "/images/capsule-lobby.jpg",
    alt: "Capsule hotel lobby with mustard reception",
    position: "right",
    span: 1,
  },
  {
    src: "/images/capsule-night.jpg",
    alt: "Capsules at night with starry projection",
    position: "right",
    span: 1,
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Text fades out first (0 to 0.2)
  const textOpacity = Math.max(0, 1 - scrollProgress / 0.2);

  // Image transforms start after text fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));

  // Smooth interpolations
  const centerWidth = 100 - imageProgress * 80;
  const centerHeight = 100;
  const sideWidth = imageProgress * 40;
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + imageProgress * 100;
  const sideTranslateRight = 100 - imageProgress * 100;
  const borderRadius = 0;
  const gap = imageProgress * 8;
  const sideTranslateY = -(imageProgress * 15);

  return (
    <section id="hero" ref={sectionRef} className="relative bg-background">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px` }}
          >
            {/* Left Column */}
            <div
              className="flex h-full flex-row will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages
                .filter((img) => img.position === "left")
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="relative h-full overflow-hidden will-change-transform"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>

            {/* Main Hero Image - Center */}
            <div
              className="relative overflow-hidden will-change-transform"
              style={{
                width: `${centerWidth}%`,
                height: `${centerHeight}%`,
                flex: "0 0 auto",
                borderRadius: `${borderRadius}px`,
              }}
            >
              {/* Text Behind - Fades out first */}
              <div
                className="absolute inset-0 z-0 flex items-center justify-center"
                style={{ opacity: textOpacity }}
              >
                <h1 className="whitespace-nowrap font-display text-[22vw] font-normal italic leading-[0.85] tracking-tight text-foreground">
                  {word.split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                      style={{
                        animationDelay: `${index * 0.06}s`,
                        transition: "all 1.5s",
                        transitionTimingFunction:
                          "cubic-bezier(0.86, 0, 0.07, 1)",
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </h1>
              </div>

              <Image
                src="/images/capsule-storefront.jpg"
                alt="Capsule Hotel storefront facade"
                fill
                className="absolute inset-0 z-10 object-cover"
                priority
              />
              {/* Subtle warm vignette */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-background/60 via-transparent to-background/30 pointer-events-none" />
            </div>

            {/* Right Column */}
            <div
              className="flex h-full flex-row will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages
                .filter((img) => img.position === "right")
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="relative h-full overflow-hidden will-change-transform"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tagline overlay */}
      <div
        className="pointer-events-none fixed top-0 left-0 right-0 z-20 px-6 pt-28 md:px-12 md:pt-36 lg:px-20"
        style={{ opacity: textOpacity }}
      >
        <div className="mx-auto flex max-w-7xl items-start justify-between text-xs uppercase tracking-[0.25em] text-foreground/80">
          <span>Est. 2024 — Montréal</span>
          <span className="hidden md:inline">Plateau Mont-Royal · QC</span>
          <span>48 Capsules</span>
        </div>
      </div>

      {/* Tagline Section - Fixed at bottom */}
      <div
        className="pointer-events-none fixed bottom-0 left-0 right-0 z-10 px-6 pb-12 md:px-12 md:pb-16 lg:px-20 lg:pb-20"
        style={{ opacity: textOpacity }}
      >
        <p className="mx-auto max-w-2xl text-center font-display text-3xl italic leading-snug text-foreground md:text-4xl lg:text-[2.75rem]">
          Sleep, refined.
          <br />
          A capsule in the city.
        </p>
      </div>

      {/* Scroll space to enable animation */}
      <div className="h-[200vh]" />
    </section>
  );
}
