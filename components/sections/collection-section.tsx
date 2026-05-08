"use client";

import { FadeImage } from "@/components/fade-image";
import { useState } from "react";

const capsules = [
  {
    id: 1,
    name: "Standard Pod",
    description:
      "A double-shelled black capsule with memory-foam bedding, USB ports and ambient amber lighting.",
    price: "$89",
    cadence: "/ night",
    size: "2.1m × 1.1m",
    image: "/images/capsule-numbers.jpg",
    features: ["Memory foam", "USB-C", "Ambient light"],
  },
  {
    id: 2,
    name: "Window Pod",
    description:
      "Same intimate footprint with a lit pane onto the green wall and a fold-down workspace.",
    price: "$129",
    cadence: "/ night",
    size: "2.1m × 1.3m",
    image: "/images/capsule-pod-interior.jpg",
    features: ["Garden view", "Workspace", "Premium bedding"],
  },
  {
    id: 3,
    name: "Suite 07",
    description:
      "Our largest pod — wide-format, walnut-lined, with private storage and a ceiling skylight.",
    price: "$189",
    cadence: "/ night",
    size: "2.4m × 1.6m",
    image: "/images/capsule-pod-interior.jpg",
    features: ["Skylight", "Walnut interior", "Private storage"],
  },
];

export function CollectionSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="book" className="bg-background">
      {/* Section Title */}
      <div className="px-6 pt-24 pb-10 md:px-12 lg:px-20 md:pt-32 md:pb-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Capsules
            </p>
            <h2 className="mt-3 font-display italic text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05]">
              Three ways to sleep.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            All capsules include access to the bathhouse, the lounge, and a
            quiet morning coffee at the front desk.
          </p>
        </div>
      </div>

      {/* Capsules Grid/Carousel */}
      <div className="pb-32">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-5 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {capsules.map((capsule, index) => (
            <div
              key={capsule.id}
              className="group flex-shrink-0 w-[82vw] snap-center"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <FadeImage
                  src={capsule.image || "/placeholder.svg"}
                  alt={capsule.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/90 bg-background/40 backdrop-blur-sm px-2 py-1">
                    No. {String(capsule.id).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/90 bg-background/40 backdrop-blur-sm px-2 py-1">
                    {capsule.size}
                  </span>
                </div>

                {/* Bottom content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display italic text-2xl text-foreground">
                        {capsule.name}
                      </h3>
                      <div className="flex gap-2 mt-2">
                        {capsule.features.map((feature, i) => (
                          <span key={i} className="text-[10px] uppercase tracking-wider text-foreground/70">
                            {feature}{i < capsule.features.length - 1 && " ·"}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-medium text-foreground">
                        {capsule.price}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {capsule.cadence}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {capsule.description}
                </p>
                <button className="mt-5 w-full border border-border py-3.5 text-xs uppercase tracking-[0.25em] text-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:border-accent active:scale-[0.98]">
                  Reserve
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 md:px-12 lg:px-20 mx-auto max-w-7xl">
          {capsules.map((capsule, index) => (
            <div 
              key={capsule.id} 
              className="group relative"
              onMouseEnter={() => setHoveredId(capsule.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[2/3] overflow-hidden bg-secondary">
                <FadeImage
                  src={capsule.image || "/placeholder.svg"}
                  alt={capsule.name}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hoveredId === capsule.id ? "scale-105" : "scale-100"
                  }`}
                />
                
                {/* Gradient overlay - intensifies on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent transition-opacity duration-500 ${
                  hoveredId === capsule.id ? "opacity-90" : "opacity-70"
                }`} />

                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/80 bg-background/30 backdrop-blur-sm px-2.5 py-1.5 transition-all duration-300 group-hover:bg-background/50">
                    No. {String(capsule.id).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/80 bg-background/30 backdrop-blur-sm px-2.5 py-1.5 transition-all duration-300 group-hover:bg-background/50">
                    {capsule.size}
                  </span>
                </div>

                {/* Bottom content - slides up on hover */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                  hoveredId === capsule.id ? "translate-y-0" : "translate-y-4"
                }`}>
                  <div className="flex items-end justify-between gap-4 mb-4">
                    <h3 className="font-display italic text-3xl text-foreground">
                      {capsule.name}
                    </h3>
                    <div className="text-right">
                      <span className="text-2xl font-medium text-foreground">
                        {capsule.price}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {capsule.cadence}
                      </span>
                    </div>
                  </div>

                  {/* Features - fade in on hover */}
                  <div className={`flex gap-3 mb-4 transition-all duration-500 ${
                    hoveredId === capsule.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}>
                    {capsule.features.map((feature, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] uppercase tracking-wider text-accent border border-accent/30 px-2 py-1"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA button - appears on hover */}
                  <button className={`w-full bg-accent py-3.5 text-xs uppercase tracking-[0.25em] text-accent-foreground transition-all duration-500 hover:bg-accent-soft ${
                    hoveredId === capsule.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}>
                    Reserve this capsule
                  </button>
                </div>
              </div>

              <div className="py-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {capsule.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
