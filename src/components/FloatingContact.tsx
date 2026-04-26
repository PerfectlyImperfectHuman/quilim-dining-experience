import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP = "https://wa.me/924418540373";
const PHONE = "tel:+924418540373";

export function FloatingContact() {
  return (
    <>
      {/* Floating WhatsApp (desktop + mobile) */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden sm:grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" />
      </a>

      {/* Sticky bottom bar (mobile only) */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden grid grid-cols-2 border-t border-border shadow-elegant">
        <a
          href={PHONE}
          className="flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground font-medium text-sm"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-medium text-sm"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </>
  );
}
