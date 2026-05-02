"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-background">
      {/* About Image with Text Overlay */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/capsule-hallway.jpg"
          alt="Hallway with vertical garden"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/40 to-transparent" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-end justify-center px-6 pb-16 md:px-12 md:pb-24 lg:px-20 lg:pb-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              The Stay
            </p>
            <p className="mx-auto mt-6 font-display italic text-2xl leading-snug text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              "I came to Montréal expecting a hotel. I left feeling like I&apos;d
              spent the night inside a small, perfectly tuned instrument."
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              — Léa M., Guest 0247
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
