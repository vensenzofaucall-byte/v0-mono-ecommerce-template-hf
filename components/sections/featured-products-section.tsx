"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    image: "/images/capsule-hallway.jpg",
    label: "The Hallway",
    span: "col-span-2 row-span-2",
  },
  {
    image: "/images/capsule-pod-interior.jpg",
    label: "Pod Interior",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/images/capsule-numbers.jpg",
    label: "Pod 19—24",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/images/capsule-window-suite.jpg",
    label: "Suite 07",
    span: "col-span-1 row-span-2",
  },
  {
    image: "/images/capsule-lounge.jpg",
    label: "The Lounge",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/images/capsule-storefront.jpg",
    label: "On Saint-Denis",
    span: "col-span-2 row-span-1",
  },
  {
    image: "/images/capsule-bathroom.jpg",
    label: "Bathhouse",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/images/capsule-night.jpg",
    label: "After Hours",
    span: "col-span-1 row-span-2",
  },
  {
    image: "/images/capsule-green-wall.jpg",
    label: "Vertical Garden",
    span: "col-span-2 row-span-1",
  },
  {
    image: "/images/capsule-exterior-night.jpg",
    label: "Dusk",
    span: "col-span-1 row-span-1",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="hotel" className="relative bg-background py-20 md:py-28">
      <div className="px-4 md:px-12 lg:px-20">
        {/* Section heading */}
        <div className="mx-auto max-w-7xl mb-10 md:mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              The Hotel
            </p>
            <h2 className="mt-3 font-display italic text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05]">
              A house of small rooms.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Two floors of black aluminum capsules wrapped around a living
            green wall, a brass-trimmed bathhouse, and a quiet ground-floor
            lounge.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-7xl mx-auto auto-rows-[180px] md:auto-rows-[220px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden border border-border/60 bg-secondary ${feature.span}`}
            >
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/0 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/90">
                  {feature.label}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
