import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Phone, Clock, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Quilim Restaurant" },
      { name: "description", content: "Book your table at Quilim Restaurant in Faisalabad. We confirm via WhatsApp." },
    ],
  }),
  component: ReservationsPage,
});

const times: string[] = [];
for (let h = 12; h <= 23; h++) {
  const hr = h > 12 ? h - 12 : h;
  const ap = h >= 12 && h < 24 ? "PM" : "AM";
  times.push(`${hr}:00 ${ap}`);
  times.push(`${hr}:30 ${ap}`);
}

function ReservationsPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Reservation received!", {
        description: "Thank you! We'll confirm your reservation via WhatsApp shortly.",
      });
    }, 700);
  };

  return (
    <Layout>
      <PageHero title="Reserve Your Table" subtitle="Secure your seat at Faisalabad's finest" />

      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* Form */}
          <Card className="p-6 md:p-10 bg-card shadow-card">
            <h2 className="font-serif text-3xl text-primary font-bold">Booking Details</h2>
            <div className="w-12 h-px bg-gold mt-3 mb-6" />
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required className="mt-1.5" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" required type="tel" className="mt-1.5" placeholder="+92 ..." />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" required type="email" className="mt-1.5" placeholder="you@example.com" />
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" required type="date" className="mt-1.5" />
                </div>
                <div>
                  <Label>Time</Label>
                  <Select required name="time">
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select time" /></SelectTrigger>
                    <SelectContent>{times.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Guests</Label>
                  <Select required name="guests">
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="People" /></SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 20 }).map((_, i) => (
                        <SelectItem key={i} value={String(i + 1)}>{i + 1}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="req">Special Requests <span className="text-muted-foreground">(optional)</span></Label>
                <Textarea id="req" className="mt-1.5" rows={4} placeholder="Allergies, occasions, seating preferences..." />
              </div>
              <Button type="submit" disabled={submitting} className="w-full bg-primary hover:bg-primary/90 text-base h-12">
                {submitting ? "Sending..." : "Confirm Reservation"}
              </Button>
            </form>
          </Card>

          {/* Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-card">
              <h3 className="font-serif text-xl text-primary font-semibold mb-4">Visit Us</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3"><Clock className="h-5 w-5 text-gold shrink-0" /> <div><div className="font-medium">Open Daily</div><div className="text-muted-foreground">11:00 AM – 12:00 AM</div></div></li>
                <li className="flex gap-3"><Phone className="h-5 w-5 text-gold shrink-0" /> <div><div className="font-medium">Call Us</div><div className="text-muted-foreground">+92 41 8540373</div></div></li>
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-gold shrink-0" /> <div><div className="font-medium">Address</div><div className="text-muted-foreground">Kohinoor City, Faisalabad</div></div></li>
              </ul>
            </Card>

            <Button asChild className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white h-12 text-base">
              <a href="https://wa.me/924418540373" target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> Chat with Us on WhatsApp
              </a>
            </Button>

            <Card className="overflow-hidden bg-card">
              <iframe
                title="Quilim Map"
                src="https://maps.google.com/maps?q=Kohinoor%20City%20Faisalabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-56 border-0"
                loading="lazy"
              />
            </Card>

            <p className="text-xs text-muted-foreground text-center px-2">
              For parties of 10+, please call us directly to arrange your booking.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
