"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl transition-all duration-300 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-md border border-border/60"
          : "bg-transparent border border-transparent"
      }`}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-3 pl-5 py-2">
        {/* Logo */}
        <Link
          href="#hero"
          className="text-base font-medium tracking-[0.2em] uppercase text-foreground"
        >
          Capsule
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#stay"
            className="text-sm tracking-wide transition-colors text-muted-foreground hover:text-foreground"
          >
            The Stay
          </Link>
          <Link
            href="#rooms"
            className="text-sm tracking-wide transition-colors text-muted-foreground hover:text-foreground"
          >
            Capsules
          </Link>
          <Link
            href="#hotel"
            className="text-sm tracking-wide transition-colors text-muted-foreground hover:text-foreground"
          >
            Hotel
          </Link>
          <Link
            href="#about"
            className="text-sm tracking-wide transition-colors text-muted-foreground hover:text-foreground"
          >
            Journal
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#book"
            className="px-4 py-2 text-sm font-medium tracking-wide transition-all bg-accent text-accent-foreground hover:opacity-90"
          >
            Book a night
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="transition-colors md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-8 md:hidden">
          <nav className="flex flex-col gap-6">
            <Link
              href="#stay"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              The Stay
            </Link>
            <Link
              href="#rooms"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Capsules
            </Link>
            <Link
              href="#hotel"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Hotel
            </Link>
            <Link
              href="#about"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Journal
            </Link>
            <Link
              href="#book"
              className="mt-4 bg-accent px-5 py-3 text-center text-sm font-medium text-accent-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a night
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
