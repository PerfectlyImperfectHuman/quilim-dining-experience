import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservations", label: "Reservations" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track desktop (lg+) breakpoint — mobile is ALWAYS solid.
  // Initialize synchronously to avoid a transparent flash on first paint.
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(min-width: 1024px)").matches : true
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Transparent only on home page, at top, on desktop. Mobile = always solid.
  const transparent = isHome && !scrolled && isDesktop;

  return (
    <header
      style={{ willChange: "background-color" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out ${
        transparent
          ? "bg-transparent"
          : "bg-background backdrop-blur-md border-b border-border shadow-card"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span
            className={`font-serif text-3xl font-bold tracking-tight transition-colors ${
              transparent ? "text-white" : "text-primary"
            }`}
          >
            Quilim
          </span>
          <span className="hidden sm:block w-8 h-px bg-gold" />
          <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-gold">
            Restaurant
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors relative py-1 ${
                  isActive
                    ? transparent
                      ? "text-gold after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-gold"
                      : "text-primary after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-gold"
                    : transparent
                    ? "text-white hover:text-gold"
                    : "text-foreground/80 hover:text-primary"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/reservations">Book a Table</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className={`lg:hidden p-2 transition-colors ${
            transparent ? "text-white" : "text-primary"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer (slides from right) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="lg:hidden fixed inset-0 top-20 bg-black/40 z-40"
          aria-hidden
        />
      )}
      <div
        className={`lg:hidden fixed top-20 right-0 bottom-0 w-72 bg-background border-l border-border shadow-elegant z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="p-4 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `relative px-4 py-3 rounded-md transition-colors min-h-[44px] flex items-center ${
                  isActive
                    ? "text-primary font-semibold after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-1.5 after:h-0.5 after:bg-gold"
                    : "text-foreground/80 hover:text-primary hover:bg-accent"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild className="mt-3 bg-primary hover:bg-primary/90 h-12 text-primary-foreground">
            <Link to="/reservations" onClick={() => setOpen(false)}>
              Book a Table
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
