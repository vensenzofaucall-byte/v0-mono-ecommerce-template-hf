"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const specs = [
  { label: "Capsules", value: "48", suffix: "pods" },
  { label: "Floors", value: "02", suffix: "levels" },
  { label: "Check-in", value: "24h", suffix: "always" },
  { label: "Quiet hours", value: "22—07", suffix: "silence" },
];

export function EditorialSection() {
  const videoRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateParallax = useCallback(() => {
    if (!videoRef.current) return;

    const rect = videoRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const videoTop = rect.top;
    const videoBottom = rect.bottom;

    if (videoBottom > 0 && videoTop < windowHeight) {
      const progress =
        1 - (videoTop + rect.height / 2) / (windowHeight + rect.height);
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateParallax]);

  const parallaxY = (scrollProgress - 0.5) * 30;

  return (
    <section className="bg-background">
      {/* Full-width Video with Parallax */}
      <div
        ref={videoRef}
        className="relative aspect-[16/9] w-full md:aspect-[21/9] overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: `scale(1.15) translate3d(0, ${parallaxY}px, 0) translateZ(0)`,
            WebkitTransform: `scale(1.15) translate3d(0, ${parallaxY}px, 0) translateZ(0)`,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            willChange: "transform",
          }}
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27eb7fb4-0105-4010-ac9e-0ac977a31b05_1-FZ89nvBAAsR3caRJbhYv7T2mjBofth.mp4"
        />
        {/* Layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-end justify-start px-6 pb-10 md:px-12 md:pb-16 lg:px-20 lg:pb-20">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              The House
            </p>
            <p className="mt-4 font-display italic text-2xl leading-snug text-foreground md:text-4xl lg:text-5xl">
              A 19th-century facade.
              <br />
              An interior built for sleep.
            </p>
            <p className="mt-6 text-sm text-foreground/70 max-w-md hidden md:block">
              Stone and greenery meet precision-engineered rest spaces.
            </p>
          </div>
        </div>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {specs.map((spec, index) => (
          <div
            key={spec.label}
            className="group relative border-b border-r border-border p-8 md:p-10 text-center last:border-r-0 md:border-b-0 transition-all duration-500 hover:bg-secondary/30"
          >
            {/* Subtle top accent on hover */}
            <div className="absolute top-0 left-0 right-0 h-px bg-accent scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
            
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors duration-300 group-hover:text-accent">
              {spec.label}
            </p>
            <p className="font-display italic font-normal text-foreground text-5xl md:text-6xl lg:text-7xl transition-all duration-500 group-hover:scale-105">
              {spec.value}
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              {spec.suffix}
            </p>
            
            {/* Index number */}
            <span className="absolute bottom-3 right-3 font-mono text-[10px] text-muted-foreground/30">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
