"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const specs = [
  { label: "Capsules", value: "48" },
  { label: "Floors", value: "02" },
  { label: "Check-in", value: "24h" },
  { label: "Quiet hours", value: "22—07" },
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
        <div className="absolute inset-0 bg-background/30" />

        <div className="absolute inset-0 flex items-end justify-start px-6 pb-10 md:px-12 md:pb-16 lg:px-20 lg:pb-20">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/80">
              The House
            </p>
            <p className="mt-3 font-display italic text-2xl leading-snug text-foreground md:text-4xl lg:text-5xl">
              A 19th-century facade.
              <br />
              An interior built for sleep.
            </p>
          </div>
        </div>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="border-b border-r border-border p-8 text-center last:border-r-0 md:border-b-0"
          >
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {spec.label}
            </p>
            <p className="font-display italic font-normal text-foreground text-5xl md:text-6xl">
              {spec.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
