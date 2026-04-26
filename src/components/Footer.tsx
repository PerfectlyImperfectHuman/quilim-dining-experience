import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/links";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.22_0.04_25)] text-[oklch(0.96_0.01_80)] mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-serif text-3xl font-bold">Quilim</span>
            <span className="w-8 h-px bg-gold" />
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Fine Dining in the Heart of <span className="text-gold">Faisalabad</span> — Pakistani · Continental · Chinese.
          </p>
          <div className="flex gap-3 mt-5">
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/20 grid place-items-center hover:bg-gold hover:border-gold hover:text-[oklch(0.22_0.04_25)] transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 grid place-items-center hover:bg-gold hover:border-gold hover:text-[oklch(0.22_0.04_25)] transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-white/20 grid place-items-center hover:bg-gold hover:border-gold hover:text-[oklch(0.22_0.04_25)] transition-colors">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-gold font-serif text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/75">
            {[
              { to: "/", l: "Home" },
              { to: "/menu", l: "Menu" },
              { to: "/gallery", l: "Gallery" },
              { to: "/reservations", l: "Reservations" },
              { to: "/about", l: "About" },
              { to: "/faq", l: "FAQ" },
              { to: "/contact", l: "Contact" },
            ].map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="hover:text-gold transition-colors">
                  {i.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-serif text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> C457+47J Hashmat Ali, Khan Rd, Block C People's Colony No 1, Faisalabad</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" /> <a href="tel:+924118540373" className="hover:text-gold transition-colors">+92 41 8540373</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-serif text-lg mb-4">Opening Hours</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li className="flex gap-3"><Clock className="h-4 w-4 text-gold shrink-0 mt-0.5" /> Monday – Sunday</li>
            <li className="pl-7">11:00 AM – 12:00 AM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © 2025 Quilim Restaurant. All Rights Reserved.
      </div>
    </footer>
  );
}
