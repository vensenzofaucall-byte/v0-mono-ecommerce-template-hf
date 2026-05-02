"use client";

import { FadeImage } from "@/components/fade-image";

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
  },
  {
    id: 3,
    name: "Suite 07",
    description:
      "Our largest pod — wide-format, walnut-lined, with private storage and a ceiling skylight.",
    price: "$189",
    cadence: "/ night",
    size: "2.4m × 1.6m",
    image: "/images/capsule-window-suite.jpg",
  },
];

export function CollectionSection() {
  return (
    <section id="book" className="bg-background">
      {/* Section Title */}
      <div className="px-6 pt-24 pb-10 md:px-12 lg:px-20 md:pt-32 md:pb-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
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
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {capsules.map((capsule) => (
            <div
              key={capsule.id}
              className="group flex-shrink-0 w-[78vw] snap-center"
            >
              <div className="relative aspect-[2/3] overflow-hidden bg-secondary">
                <FadeImage
                  src={capsule.image || "/placeholder.svg"}
                  alt={capsule.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-foreground">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/80">
                    No. {String(capsule.id).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/80">
                    {capsule.size}
                  </span>
                </div>
              </div>

              <div className="py-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display italic text-2xl text-foreground">
                    {capsule.name}
                  </h3>
                  <span className="text-lg font-medium text-foreground">
                    {capsule.price}
                    <span className="text-sm text-muted-foreground">
                      {capsule.cadence}
                    </span>
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {capsule.description}
                </p>
                <button className="mt-5 w-full border border-border py-3 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent">
                  Reserve
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20 mx-auto max-w-7xl">
          {capsules.map((capsule) => (
            <div key={capsule.id} className="group">
              <div className="relative aspect-[2/3] overflow-hidden bg-secondary">
                <FadeImage
                  src={capsule.image || "/placeholder.svg"}
                  alt={capsule.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-foreground">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/80">
                    No. {String(capsule.id).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/80">
                    {capsule.size}
                  </span>
                </div>
              </div>

              <div className="py-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display italic text-3xl text-foreground">
                    {capsule.name}
                  </h3>
                  <span className="text-2xl font-medium text-foreground">
                    {capsule.price}
                    <span className="ml-1 text-sm text-muted-foreground">
                      {capsule.cadence}
                    </span>
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {capsule.description}
                </p>
                <button className="mt-6 w-full border border-border py-3 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent">
                  Reserve
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
