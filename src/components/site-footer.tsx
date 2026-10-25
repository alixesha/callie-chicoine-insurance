import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

const PHONE_DISPLAY = "(605) 670-1823";
const PHONE_HREF = "tel:+16056701823";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const services = [
  "Medicare Advantage",
  "Medicare Supplement",
  "Prescription Drug Plans",
  "Annual Plan Reviews",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl">Callie Chicoine</p>
          <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-gold">
            Medicare Insurance Agent
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            Personal, unhurried Medicare guidance for neighbors across South Dakota —
            from your first enrollment to your annual plan review.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 hover:text-gold">
              <Phone className="size-4" aria-hidden />
              {PHONE_DISPLAY}
            </a>
            <span className="inline-flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="size-4" aria-hidden />
              Serving communities across South Dakota
            </span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-primary-foreground/80 transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
          <p className="text-xs leading-relaxed text-primary-foreground/60">
            Callie Chicoine is a licensed insurance agent appointed with multiple Medicare plan
            providers. This site is not connected with or endorsed by the U.S. government or the
            federal Medicare program. Plan availability varies by area.
          </p>
          <p className="mt-3 text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Callie Chicoine Insurance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
