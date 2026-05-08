"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const footerLinks = {
  hotel: [
    { label: "The Stay", href: "#stay" },
    { label: "Capsules", href: "#rooms" },
    { label: "The Hotel", href: "#hotel" },
    { label: "Bathhouse", href: "#hotel" },
  ],
  visit: [
    { label: "Location", href: "#" },
    { label: "Neighbourhood", href: "#" },
    { label: "Group bookings", href: "#" },
    { label: "Contact", href: "#" },
  ],
  service: [
    { label: "Reservations", href: "#book" },
    { label: "House rules", href: "#" },
    { label: "Cancellation", href: "#" },
    { label: "Press", href: "#" },
  ],
};

export function FooterSection() {
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (wordmarkRef.current) {
      observer.observe(wordmarkRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-background relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent pointer-events-none" />
      
      {/* Big closing wordmark */}
      <div 
        ref={wordmarkRef}
        className="relative border-t border-border px-6 pt-20 md:px-12 lg:px-20 overflow-hidden"
      >
        <p className={`font-display italic text-foreground text-[18vw] leading-[0.85] md:text-[14vw] transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          Capsule.
        </p>
        
        {/* Accent underline */}
        <div className={`h-px bg-gradient-to-r from-accent via-accent/50 to-transparent mt-8 transition-all duration-1000 delay-300 ${
          isVisible ? "w-full opacity-100" : "w-0 opacity-0"
        }`} />
      </div>

      {/* Main Footer Content */}
      <div className="relative border-t border-border mt-12 px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-10 md:gap-8 md:grid-cols-4 lg:grid-cols-5 max-w-7xl mx-auto">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link
              href="#hero"
              className="group inline-flex items-center text-base font-medium tracking-[0.2em] uppercase text-foreground transition-all duration-300 hover:tracking-[0.25em]"
            >
              <span className="relative">
                Capsule
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A boutique capsule hotel folded into a 19th-century stone facade
              in Montréal&apos;s Plateau Mont-Royal.
            </p>
            <div className="mt-6 space-y-1">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                2040 Saint-Denis
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Montréal, QC H2X 3K8
              </p>
            </div>
            
            {/* Newsletter subtle CTA */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Stay updated
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 bg-secondary/50 border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 transition-colors"
                />
                <button className="bg-accent text-accent-foreground px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 hover:bg-accent-soft">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Hotel */}
          <div>
            <h4 className="mb-5 text-xs uppercase tracking-[0.25em] text-accent">
              Hotel
            </h4>
            <ul className="space-y-3">
              {footerLinks.hotel.map((link, index) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-foreground/70 transition-all duration-300 hover:text-foreground hover:translate-x-1"
                  >
                    <span className="font-mono text-[10px] text-muted-foreground/50 group-hover:text-accent transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="mb-5 text-xs uppercase tracking-[0.25em] text-accent">
              Visit
            </h4>
            <ul className="space-y-3">
              {footerLinks.visit.map((link, index) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-foreground/70 transition-all duration-300 hover:text-foreground hover:translate-x-1"
                  >
                    <span className="font-mono text-[10px] text-muted-foreground/50 group-hover:text-accent transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="mb-5 text-xs uppercase tracking-[0.25em] text-accent">
              Service
            </h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link, index) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-foreground/70 transition-all duration-300 hover:text-foreground hover:translate-x-1"
                  >
                    <span className="font-mono text-[10px] text-muted-foreground/50 group-hover:text-accent transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row max-w-7xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
            © 2026 Capsule Hotel — All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {["Instagram", "Spotify", "Press kit"].map((item) => (
              <Link
                key={item}
                href="#"
                className="group relative text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {item}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
