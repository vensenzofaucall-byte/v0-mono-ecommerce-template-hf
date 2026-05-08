"use client";

import { FadeImage } from "@/components/fade-image";
import { useState } from "react";

const features = [
  {
    image: "/images/capsule-hallway.jpg",
    label: "The Hallway",
    subtitle: "Stone meets greenery",
    span: "col-span-2 row-span-2",
  },
  {
    image: "/images/capsule-pod-interior.jpg",
    label: "Pod Interior",
    subtitle: "Walnut & amber light",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/images/capsule-numbers.jpg",
    label: "Pod 19—24",
    subtitle: "Upper floor",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/images/capsule-pod-interior.jpg",
    label: "Suite 07",
    subtitle: "Premium capsule",
    span: "col-span-1 row-span-2",
  },
  {
    image: "/images/capsule-lounge.jpg",
    label: "The Lounge",
    subtitle: "Common space",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/images/capsule-reception.jpg",
    label: "On Saint-Denis",
    subtitle: "The welcome",
    span: "col-span-2 row-span-1",
  },
  {
    image: "/images/capsule-bathroom.jpg",
    label: "Bathhouse",
    subtitle: "Marble & brass",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/images/capsule-night.jpg",
    label: "After Hours",
    subtitle: "22:00—07:00",
    span: "col-span-1 row-span-2",
  },
  {
    image: "/images/capsule-hallway.jpg",
    label: "Vertical Garden",
    subtitle: "Living wall",
    span: "col-span-2 row-span-1",
  },
  {
    image: "/images/capsule-night.jpg",
    label: "Dusk",
    subtitle: "Evening ambiance",
    span: "col-span-1 row-span-1",
  },
];

export function FeaturedProductsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="hotel" className="relative bg-background py-20 md:py-32">
      <div className="px-4 md:px-12 lg:px-20">
        {/* Section heading */}
        <div className="mx-auto max-w-7xl mb-12 md:mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              The Hotel
            </p>
            <h2 className="mt-3 font-display italic text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05]">
              A house of small rooms.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
            Two floors of black aluminum capsules wrapped around a living
            green wall, a brass-trimmed bathhouse, and a quiet ground-floor
            lounge.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 w-full max-w-7xl mx-auto auto-rows-[160px] md:auto-rows-[200px] lg:auto-rows-[240px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-secondary ${feature.span}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.label}
                fill
                className={`object-cover transition-all duration-700 ease-out ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              
              {/* Gradient overlay - more pronounced on hover */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                hoveredIndex === index 
                  ? "bg-gradient-to-t from-background via-background/40 to-transparent"
                  : "bg-gradient-to-t from-background/80 via-transparent to-transparent"
              }`} />
              
              {/* Subtle border glow on hover */}
              <div className={`absolute inset-0 transition-all duration-500 pointer-events-none ${
                hoveredIndex === index 
                  ? "ring-1 ring-inset ring-accent/30"
                  : "ring-1 ring-inset ring-border/30"
              }`} />

              {/* Content */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 md:p-5 transition-all duration-500 ${
                hoveredIndex === index ? "translate-y-0" : "translate-y-1"
              }`}>
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <span className={`block text-xs md:text-sm uppercase tracking-[0.15em] text-foreground transition-all duration-300 ${
                      hoveredIndex === index ? "text-accent" : ""
                    }`}>
                      {feature.label}
                    </span>
                    <span className={`block text-[10px] md:text-xs text-muted-foreground mt-0.5 transition-all duration-500 ${
                      hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}>
                      {feature.subtitle}
                    </span>
                  </div>
                  <span className={`font-mono text-[10px] text-muted-foreground transition-all duration-300 ${
                    hoveredIndex === index ? "text-accent/70" : ""
                  }`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Corner accent on hover */}
              <div className={`absolute top-0 right-0 w-8 h-8 transition-all duration-500 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}>
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-accent/50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
