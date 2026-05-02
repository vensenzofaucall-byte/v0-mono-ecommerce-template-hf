"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

export function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const images = [
    { src: "/images/capsule-storefront.jpg", alt: "The facade on Saint-Denis", caption: "Arrival" },
    { src: "/images/capsule-hallway.jpg", alt: "Hallway with green wall", caption: "The Garden Hall" },
    { src: "/images/capsule-numbers.jpg", alt: "Capsule pods 19-24", caption: "Your Pod" },
    { src: "/images/capsule-night.jpg", alt: "Capsules at night", caption: "Goodnight" },
  ];

  const updateTransform = useCallback(() => {
    if (!galleryRef.current) return;

    const rect = galleryRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = galleryRef.current.offsetHeight;

    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));

    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateTransform);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransform();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransform]);

  const isLastImage = images.length - 1;

  const fullscreenStartProgress = 0.6;
  const fullscreenProgress = Math.max(
    0,
    Math.min(
      1,
      (scrollProgress - fullscreenStartProgress) / (1 - fullscreenStartProgress)
    )
  );

  const easedFullscreenProgress = 1 - Math.pow(1 - fullscreenProgress, 3);

  return (
    <section
      id="rooms"
      ref={galleryRef}
      className="relative bg-background"
      style={{ minHeight: `${(images.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center px-4">
        <div className="relative w-full max-w-5xl h-[70vh] md:h-[80vh]">
          {images.map((image, index) => {
            const isLast = index === isLastImage;

            const imageProgress = scrollProgress * images.length - index;
            const stackProgress = Math.max(0, Math.min(1, imageProgress));

            const translateY = (1 - stackProgress) * 100;
            let scale = 0.8 + stackProgress * 0.2;
            const opacity = stackProgress;

            if (isLast) {
              const normalScale = 0.8 + stackProgress * 0.2;
              const expandedScale = 1 + easedFullscreenProgress * 0.8;
              scale =
                normalScale +
                Math.max(0, stackProgress - 0.8) * 5 *
                  (expandedScale - normalScale);
            }

            const zIndex = index;

            const borderRadius =
              isLast && easedFullscreenProgress > 0.3
                ? (1 - easedFullscreenProgress) * 16
                : undefined;

            return (
              <div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  zIndex,
                  transform: `translate3d(0, ${translateY}%, 0) scale(${scale}) translateZ(0)`,
                  WebkitTransform: `translate3d(0, ${translateY}%, 0) scale(${scale}) translateZ(0)`,
                  opacity,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  willChange: "transform, opacity",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    borderRadius:
                      borderRadius !== undefined
                        ? `${borderRadius}px`
                        : undefined,
                  }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index < 3}
                  />
                  {/* Caption */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-foreground">
                    <span className="font-display italic text-2xl md:text-3xl">
                      {image.caption}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/70">
                      {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
