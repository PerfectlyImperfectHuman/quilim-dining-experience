import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

function ContactPage() {
  usePageTitle("Contact Us — Quilim Restaurant Faisalabad");
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message received!", { description: "We'll get back to you soon." });
    }, 700);
  };

  return (
    <Layout>
      <PageHero title="Get in Touch" subtitle="We'd love to hear from you" />

      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <Card className="p-6 md:p-10 bg-card shadow-card">
            <h2 className="font-serif text-3xl text-primary font-bold">Send a Message</h2>
            <div className="w-12 h-px bg-gold mt-3 mb-6" />
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="cname">Name</Label>
                <Input id="cname" required className="mt-1.5" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="cemail">Email</Label>
                  <Input id="cemail" required type="email" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="cphone">Phone</Label>
                  <Input id="cphone" required type="tel" className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="cmsg">Message</Label>
                <Textarea id="cmsg" required rows={6} className="mt-1.5" />
              </div>
              <Button type="submit" disabled={submitting} className="w-full bg-primary hover:bg-primary/90 h-12 text-base min-h-[48px]">
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-card">
              <h3 className="font-serif text-xl text-primary font-semibold mb-5">Contact Information</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-gold shrink-0" /><div><div className="font-medium">Address</div><div className="text-muted-foreground">C457+47J Hashmat Ali, Khan Rd, Block C People's Colony No 1, Faisalabad, Pakistan</div></div></li>
                <li className="flex gap-3"><Phone className="h-5 w-5 text-gold shrink-0" /><div><div className="font-medium">Phone</div><div className="text-muted-foreground"><a href="tel:+924118540373" className="hover:text-primary">0418540373 / +92 41 8540373</a></div></div></li>
                <li className="flex gap-3"><Mail className="h-5 w-5 text-gold shrink-0" /><div><div className="font-medium">Email</div><div className="text-muted-foreground">info@quilim.com</div></div></li>
                <li className="flex gap-3"><Clock className="h-5 w-5 text-gold shrink-0" /><div><div className="font-medium">Hours</div><div className="text-muted-foreground">Mon – Sun · 11:00 AM – 12:00 AM</div></div></li>
              </ul>
            </Card>

            <Button asChild className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white h-12 text-base min-h-[48px]">
              <a href="https://wa.me/923418540373" target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
              </a>
            </Button>

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

export default ContactPage;
