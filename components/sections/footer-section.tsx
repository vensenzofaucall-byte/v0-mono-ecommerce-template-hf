"use client";

import Link from "next/link";

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
  return (
    <footer className="bg-background">
      {/* Big closing wordmark */}
      <div className="border-t border-border px-6 pt-20 md:px-12 lg:px-20">
        <p className="font-display italic text-foreground text-[20vw] leading-[0.85] md:text-[15vw]">
          Capsule.
        </p>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-border mt-16 px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link
              href="#hero"
              className="text-base font-medium tracking-[0.2em] uppercase text-foreground"
            >
              Capsule
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A boutique capsule hotel folded into a 19th-century stone facade
              in Montréal&apos;s Plateau Mont-Royal.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              2040 Saint-Denis
              <br />
              Montréal, QC H2X 3K8
            </p>
          </div>

          {/* Hotel */}
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Hotel
            </h4>
            <ul className="space-y-3">
              {footerLinks.hotel.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Visit
            </h4>
            <ul className="space-y-3">
              {footerLinks.visit.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Service
            </h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            © 2026 Capsule Hotel — All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Spotify
            </Link>
            <Link
              href="#"
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Press kit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
