"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-background" ref={sectionRef}>
      {/* About Image with Text Overlay */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
        <Image
          src="/images/capsule-hallway.jpg"
          alt="Hallway with vertical garden"
          fill
          className={`object-cover transition-all duration-[1.5s] ease-out ${
            isVisible ? "scale-100" : "scale-110"
          }`}
        />
        
        {/* Layered gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />

        {/* Decorative quote marks */}
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-10" : "opacity-0"
        }`}>
          <span className="font-display text-[20vw] text-accent leading-none">&ldquo;</span>
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-end justify-center px-6 pb-16 md:px-12 md:pb-24 lg:px-20 lg:pb-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className={`text-xs uppercase tracking-[0.3em] text-accent transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              The Stay
            </p>
            
            <p className={`mx-auto mt-6 font-display italic text-2xl leading-snug text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-[1.15] transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}>
              &ldquo;I came to Montréal expecting a hotel. I left feeling like I&apos;d
              spent the night inside a small, perfectly tuned instrument.&rdquo;
            </p>
            
            <div className={`mt-8 flex items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <span className="h-px w-8 bg-accent/50" />
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Léa M., Guest 0247
              </p>
              <span className="h-px w-8 bg-accent/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
