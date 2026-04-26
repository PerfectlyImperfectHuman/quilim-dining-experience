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
import { usePageTitle } from "@/hooks/use-page-title";

// 30-min slots from 11:00 AM to 11:30 PM
const times: string[] = [];
for (let h = 11; h <= 23; h++) {
  const hr12 = h % 12 === 0 ? 12 : h % 12;
  const ap = h >= 12 ? "PM" : "AM";
  times.push(`${hr12}:00 ${ap}`);
  times.push(`${hr12}:30 ${ap}`);
}

function ReservationsPage() {
  usePageTitle("Reserve a Table — Quilim Restaurant");
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
              <Button type="submit" disabled={submitting} className="w-full bg-primary hover:bg-primary/90 text-base h-12 min-h-[48px]">
                {submitting ? "Sending..." : "Confirm Reservation"}
              </Button>
              <Button asChild className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white h-12 text-base min-h-[48px]">
                <a href="https://wa.me/923418540373" target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> Or Reserve via WhatsApp
                </a>
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                For parties of 10 or more, please call us directly at <a href="tel:+924118540373" className="text-primary font-medium">0418540373</a>
              </p>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-card">
              <h3 className="font-serif text-xl text-primary font-semibold mb-4">Visit Us</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3"><Clock className="h-5 w-5 text-gold shrink-0" /> <div><div className="font-medium">Open Daily</div><div className="text-muted-foreground">11:00 AM – 12:00 AM</div></div></li>
                <li className="flex gap-3"><Phone className="h-5 w-5 text-gold shrink-0" /> <div><div className="font-medium">Call Us</div><div className="text-muted-foreground">+92 41 8540373</div></div></li>
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-gold shrink-0" /> <div><div className="font-medium">Address</div><div className="text-muted-foreground">C457+47J Hashmat Ali, Khan Rd, Block C People's Colony No 1, Faisalabad</div></div></li>
              </ul>
            </Card>

            <Card className="overflow-hidden bg-card">
              <iframe
                title="Quilim Restaurant Map"
                src="https://maps.google.com/maps?q=31.4078299,73.11315&z=17&output=embed"
                className="w-full h-72 border-0"
                loading="lazy"
              />
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ReservationsPage;
