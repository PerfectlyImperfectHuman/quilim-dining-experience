import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Facebook,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  WHATSAPP_URL,
  PHONE_TEL,
  PHONE_DISPLAY,
  GOOGLE_MAPS_URL,
  WHATSAPP_NUMBER,
} from "@/lib/links";
import interior from "@/assets/real-chandelier.jpg";

function ContactPage() {
  usePageTitle("Contact Us — Quilim Restaurant Faisalabad");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const name = fd.get("cname");
    const phone = fd.get("cphone");
    const email = fd.get("cemail");
    const msg = fd.get("cmsg");

    const message = encodeURIComponent(
      `Hi Quilim, I'm reaching out via the website contact form.\n\n• Name: ${name}\n• Phone: ${phone}\n• Email: ${email}\n\n${msg}`,
    );

    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Opening WhatsApp...", {
        description: "Your message is pre-filled and ready to send.",
      });
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    }, 500);
  };

  return (
    <Layout>
      {/* Premium minimal hero */}
      <section className="relative -mt-20 pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[oklch(0.22_0.04_25)] to-[oklch(0.28_0.04_25)] text-white">
        <img
          src={interior}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="container mx-auto px-4 lg:px-8 relative text-center max-w-2xl">
          <span className="text-gold text-xs uppercase tracking-[0.4em]">Get in Touch</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mt-4 leading-tight">
            We'd love to <span className="text-gold">hear from you</span>
          </h1>
          <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed">
            Reservations, private events, feedback or a simple hello — our team typically replies
            within minutes.
          </p>
        </div>
      </section>

      {/* Quick contact tiles */}
      <section className="container mx-auto px-4 lg:px-8 -mt-10 md:-mt-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: Phone,
              label: "Call us",
              value: PHONE_DISPLAY,
              href: PHONE_TEL,
              sub: "Daily · 11AM – 12AM",
            },
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: "Chat instantly",
              href: WHATSAPP_URL,
              sub: "Fastest response",
              external: true,
              accent: true,
            },
            {
              icon: MapPin,
              label: "Visit",
              value: "People's Colony, Faisalabad",
              href: GOOGLE_MAPS_URL,
              sub: "Get directions →",
              external: true,
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noreferrer" : undefined}
              className={`group rounded-xl p-5 border bg-card hover-lift transition-all ${
                c.accent ? "border-gold/40" : "border-border"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-lg grid place-items-center mb-3 ${c.accent ? "bg-[#25D366]/10 text-[#25D366]" : "bg-primary/10 text-primary"}`}
              >
                <c.icon className="h-5 w-5" />
              </div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {c.label}
              </div>
              <div className="font-serif text-lg text-foreground font-semibold mt-0.5">
                {c.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{c.sub}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12">
          {/* FORM */}
          <Card className="p-6 md:p-10 bg-card border-border/60 shadow-card">
            <div className="flex items-baseline justify-between mb-2">
              <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold">
                Send a message
              </h2>
              <span className="text-xs text-muted-foreground hidden sm:inline">
                Opens WhatsApp instantly
              </span>
            </div>
            <div className="w-10 h-px bg-gold mb-7" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="cname"
                  className="text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Your name
                </Label>
                <Input
                  id="cname"
                  name="cname"
                  required
                  placeholder="Full name"
                  className="mt-2 h-12 border-0 border-b-2 border-border rounded-none px-0 focus-visible:border-gold focus-visible:ring-0 bg-transparent text-base"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label
                    htmlFor="cemail"
                    className="text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    Email
                  </Label>
                  <Input
                    id="cemail"
                    name="cemail"
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 h-12 border-0 border-b-2 border-border rounded-none px-0 focus-visible:border-gold focus-visible:ring-0 bg-transparent text-base"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="cphone"
                    className="text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    Phone
                  </Label>
                  <Input
                    id="cphone"
                    name="cphone"
                    required
                    type="tel"
                    placeholder="+92 ..."
                    className="mt-2 h-12 border-0 border-b-2 border-border rounded-none px-0 focus-visible:border-gold focus-visible:ring-0 bg-transparent text-base"
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="cmsg"
                  className="text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </Label>
                <Textarea
                  id="cmsg"
                  name="cmsg"
                  required
                  rows={5}
                  placeholder="How can we help you?"
                  className="mt-2 border-0 border-b-2 border-border rounded-none px-0 focus-visible:border-gold focus-visible:ring-0 bg-transparent text-base resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-primary hover:bg-primary/90 h-12 px-8 text-base min-h-[48px] flex-1"
                >
                  {submitting ? (
                    "Opening WhatsApp..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send via WhatsApp
                    </>
                  )}
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 px-6 text-base min-h-[48px] border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp directly
                  </a>
                </Button>
              </div>
            </form>
          </Card>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border/60">
              <h3 className="font-serif text-xl text-primary font-semibold mb-5">
                Contact details
              </h3>
              <ul className="space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Address</div>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      C457+47J Hashmat Ali, Khan Rd, Block C People's Colony No 1, Faisalabad
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <a
                      href={PHONE_TEL}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <a
                      href="mailto:quilimfsd@quilim.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@quilim.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Hours</div>
                    <div className="text-muted-foreground">Mon – Sun · 11:00 AM – 12:00 AM</div>
                  </div>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  Follow us
                </div>
                <div className="flex gap-2">
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="w-10 h-10 rounded-full border border-border grid place-items-center hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden bg-card border-border/60 group">
              <iframe
                title="Quilim Restaurant location map"
                src="https://maps.google.com/maps?q=31.4078299,73.11315&z=17&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-2 p-4 text-sm font-medium text-primary hover:bg-accent/40 transition-colors"
              >
                Open in Google Maps <ExternalLink className="h-4 w-4" />
              </a>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
