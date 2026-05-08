"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const titles = [
  { text: "Less room. More rest.", number: "01" },
  { text: "An urban refuge.", number: "02" },
  { text: "Designed to disappear.", number: "03" },
];

export function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [titleOpacity, setTitleOpacity] = useState(0);
  const [descriptionProgress, setDescriptionProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateTransforms = useCallback(() => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = sectionRef.current.offsetHeight;

    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));

    setTitleOpacity(progress);

    if (descriptionRef.current) {
      const descRect = descriptionRef.current.getBoundingClientRect();
      const descTop = descRect.top;
      const descHeight = descRect.height;

      const startTrigger = windowHeight * 0.8;
      const endTrigger = windowHeight * 0.2;

      if (descTop < startTrigger && descTop > endTrigger - descHeight) {
        const descProgress = Math.max(
          0,
          Math.min(1, (startTrigger - descTop) / (startTrigger - endTrigger))
        );
        setDescriptionProgress(descProgress);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateTransforms);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransforms();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransforms]);

  return (
    <section id="stay" className="bg-background">
      <div ref={sectionRef} className="relative" style={{ height: "200vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-7xl px-4">
            <div
              className="flex items-center justify-center pointer-events-none"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-full"
                style={{ transformStyle: "preserve-3d", minHeight: "150px" }}
              >
                {titles.map((title, index) => {
                  const isLastText = index === titles.length - 1;

                  const segmentSize = 1 / titles.length;
                  const startProgress = index * segmentSize;
                  const endProgress = (index + 1) * segmentSize;

                  let rotateX = 0;
                  let opacity = 0;

                  if (
                    titleOpacity >= startProgress &&
                    titleOpacity < endProgress
                  ) {
                    const localProgress =
                      (titleOpacity - startProgress) / segmentSize;
                    rotateX = (1 - localProgress) * 90;
                    opacity = localProgress;
                  } else if (titleOpacity >= endProgress) {
                    if (isLastText) {
                      rotateX = 0;
                      opacity = 1;
                    } else {
                      rotateX = -90;
                      opacity = 0;
                    }
                  } else {
                    rotateX = 90;
                    opacity = 0;
                  }

                  return (
                    <div
                      key={index}
                      className="absolute inset-0 flex flex-col items-center justify-center px-4"
                      style={{
                        transform: `rotateX(${rotateX}deg) translateZ(0)`,
                        opacity,
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        willChange: "transform, opacity",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <span className="text-xs font-mono tracking-[0.3em] text-accent mb-4">
                        {title.number}
                      </span>
                      <h2 className="font-display italic font-normal text-[10vw] sm:text-[8vw] leading-tight tracking-tight text-foreground md:text-[7vw] lg:text-[6vw] text-center">
                        {title.text}
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div
        ref={descriptionRef}
        className="px-6 pt-8 pb-24 md:px-12 md:pt-12 md:pb-32 lg:px-20 lg:pt-16 lg:pb-40"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-8 leading-relaxed text-muted-foreground text-2xl md:text-3xl">
            {(
              "A boutique capsule hotel folded into a 19th-century stone facade. Forty-eight private pods, a vertical garden, warm wood and cool brass — engineered for the hours that matter most: the ones you spend asleep."
            )
              .split(" ")
              .map((word, index, array) => {
                const wordProgress = Math.max(
                  0,
                  Math.min(1, descriptionProgress * array.length - index)
                );
                const opacity = wordProgress;
                const blur = (1 - wordProgress) * 30;

                return (
                  <span
                    key={index}
                    style={{
                      opacity,
                      filter: `blur(${blur}px)`,
                      transition: "opacity 0.3s ease, filter 0.3s ease",
                    }}
                  >
                    {word}
                    {index < array.length - 1 ? " " : ""}
                  </span>
                );
              })}
          </p>
        </div>
      </div>
    </section>
  );
}
