"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Track active section for navigation highlighting
      const sections = ["hero", "stay", "rooms", "hotel", "about", "book"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#stay", label: "The Stay", id: "stay" },
    { href: "#rooms", label: "Capsules", id: "rooms" },
    { href: "#hotel", label: "Hotel", id: "hotel" },
    { href: "#about", label: "Journal", id: "about" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border border-border/40 shadow-lg shadow-black/10"
          : "bg-transparent border border-transparent"
      }`}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-3 pl-5 py-2.5">
        {/* Logo */}
        <Link
          href="#hero"
          className="group text-base font-medium tracking-[0.2em] uppercase text-foreground transition-all duration-300 hover:tracking-[0.25em]"
        >
          <span className="relative">
            Capsule
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`relative text-sm tracking-wide transition-all duration-300 ${
                activeSection === link.id 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              <span 
                className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                  activeSection === link.id ? "w-full" : "w-0"
                }`} 
              />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#book"
            className="group relative px-5 py-2.5 text-sm font-medium tracking-wide overflow-hidden bg-accent text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
          >
            <span className="relative z-10">Book a night</span>
            <span className="absolute inset-0 bg-accent-soft translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative w-10 h-10 flex items-center justify-center transition-colors md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          <span className={`absolute transition-all duration-300 ${isMenuOpen ? "rotate-45 opacity-100" : "rotate-0 opacity-100"}`}>
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-out md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl px-6 py-8">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link, index) => (
              <Link
                key={link.id}
                href={link.href}
                className={`text-lg text-foreground transition-all duration-300 hover:text-accent hover:translate-x-2`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="font-mono text-xs text-muted-foreground mr-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {link.label}
              </Link>
            ))}
            <Link
              href="#book"
              className="mt-4 bg-accent px-5 py-3.5 text-center text-sm font-medium tracking-wide text-accent-foreground transition-all duration-300 hover:bg-accent-soft"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a night
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
