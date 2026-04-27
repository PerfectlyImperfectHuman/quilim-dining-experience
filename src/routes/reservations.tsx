import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Phone, Clock, MapPin, MessageCircle, Calendar, Users, Sparkles, ExternalLink } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";
import { GOOGLE_MAPS_URL, PHONE_TEL, PHONE_DISPLAY, WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/links";
import interior from "@/assets/real-chandelier.jpg";

// 30-min slots from 11:00 AM to 11:30 PM
const times: string[] = [];
for (let h = 11; h <= 23; h++) {
  const hr12 = h % 12 === 0 ? 12 : h % 12;
  const ap = h >= 12 ? "PM" : "AM";
  times.push(`${hr12}:00 ${ap}`);
  times.push(`${hr12}:30 ${ap}`);
}

const inputCls =
  "mt-2 h-12 border-0 border-b-2 border-border rounded-none px-0 focus-visible:border-gold focus-visible:ring-0 bg-transparent text-base";

function ReservationsPage() {
  usePageTitle("Reserve a Table — Quilim Restaurant");
  const [submitting, setSubmitting] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name");
    const phone = fd.get("phone");
    const req = fd.get("req") || "";

    const message = encodeURIComponent(
      `Hi Quilim, I'd like to reserve a table.\n\n• Name: ${name}\n• Phone: ${phone}\n• Date: ${date}\n• Time: ${time}\n• Guests: ${guests}\n${req ? `• Notes: ${req}` : ""}`
    );

    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setDate(""); setTime(""); setGuests("");
      toast.success("Reservation request received!", {
        description: "Opening WhatsApp to confirm with our team...",
      });
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    }, 600);
  };

  return (
    <Layout>
      {/* Premium hero */}
      <section className="relative -mt-20 pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[oklch(0.22_0.04_25)] to-[oklch(0.28_0.04_25)] text-white">
        <img src={interior} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center max-w-2xl">
          <span className="text-gold text-xs uppercase tracking-[0.4em]">Reservations</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Reserve your <span className="text-gold">table</span>
          </h1>
          <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed">
            Faisalabad's most loved fine-dining experience — we'll confirm within minutes via WhatsApp.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12">
          {/* Form card */}
          <Card className="p-6 md:p-10 bg-card shadow-card border-border/60">
            <div className="flex items-baseline justify-between mb-2">
              <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold">Booking details</h2>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-gold">
                <Sparkles className="h-3.5 w-3.5" /> Instant confirmation
              </span>
            </div>
            <div className="w-10 h-px bg-gold mb-7" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Full name</Label>
                  <Input id="name" name="name" required className={inputCls} placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-muted-foreground">Phone</Label>
                  <Input id="phone" name="phone" required type="tel" className={inputCls} placeholder="+92 ..." />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Email <span className="opacity-60 normal-case">(optional)</span></Label>
                <Input id="email" name="email" type="email" className={inputCls} placeholder="you@example.com" />
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="date" className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"><Calendar className="h-3 w-3" /> Date</Label>
                  <Input id="date" name="date" required type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"><Clock className="h-3 w-3" /> Time</Label>
                  <Select required value={time} onValueChange={setTime}>
                    <SelectTrigger className="mt-2 h-12 border-0 border-b-2 border-border rounded-none px-0 focus:border-gold focus:ring-0 bg-transparent text-base">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>{times.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"><Users className="h-3 w-3" /> Guests</Label>
                  <Select required value={guests} onValueChange={setGuests}>
                    <SelectTrigger className="mt-2 h-12 border-0 border-b-2 border-border rounded-none px-0 focus:border-gold focus:ring-0 bg-transparent text-base">
                      <SelectValue placeholder="People" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 20 }).map((_, i) => (
                        <SelectItem key={i} value={String(i + 1)}>{i + 1} {i === 0 ? "person" : "people"}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="req" className="text-xs uppercase tracking-wider text-muted-foreground">Special requests <span className="opacity-60 normal-case">(optional)</span></Label>
                <Textarea id="req" name="req" rows={3} className="mt-2 border-0 border-b-2 border-border rounded-none px-0 focus-visible:border-gold focus-visible:ring-0 bg-transparent text-base resize-none" placeholder="Allergies, occasions, seating preferences..." />
              </div>

              <div className="pt-2 space-y-3">
                <Button type="submit" disabled={submitting} className="w-full bg-primary hover:bg-primary/90 text-base h-12 min-h-[48px]">
                  {submitting ? "Sending..." : "Confirm Reservation"}
                </Button>
                <Button asChild variant="outline" className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white h-12 text-base min-h-[48px]">
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" /> Or reserve directly via WhatsApp
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground text-center pt-2">
                  Parties of 10+? Please call <a href={PHONE_TEL} className="text-primary font-medium">{PHONE_DISPLAY}</a>
                </p>
              </div>
            </form>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border/60">
              <h3 className="font-serif text-xl text-primary font-semibold mb-5">Visit us</h3>
              <ul className="space-y-5 text-sm">
                <li className="flex gap-3">
                  <Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div><div className="font-medium text-foreground">Open daily</div><div className="text-muted-foreground">11:00 AM – 12:00 AM</div></div>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Call us</div>
                    <a href={PHONE_TEL} className="text-muted-foreground hover:text-primary">{PHONE_DISPLAY}</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Address</div>
                    <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                      C457+47J Hashmat Ali, Khan Rd, Block C People's Colony No 1, Faisalabad
                    </a>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="overflow-hidden bg-card border-border/60">
              <iframe
                title="Quilim Restaurant location map"
                src="https://maps.google.com/maps?q=31.4078299,73.11315&z=17&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 p-4 text-sm font-medium text-primary hover:bg-accent/40 transition-colors">
                Open in Google Maps <ExternalLink className="h-4 w-4" />
              </a>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ReservationsPage;
