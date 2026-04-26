import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Phone, MessageCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/use-page-title";
import { GOOGLE_MAPS_URL, PHONE_TEL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/links";

const faqs = [
  {
    q: "Where is Quilim Restaurant located in Faisalabad?",
    a: "Quilim Restaurant is located at C457+47J Hashmat Ali Khan Road, Block C, People's Colony No 1, Faisalabad, Pakistan — easily reachable from all major areas of the city.",
  },
  {
    q: "What are Quilim Restaurant's opening hours?",
    a: "We are open every day of the week, from 11:00 AM to 12:00 AM (midnight), including weekends and public holidays.",
  },
  {
    q: "Do I need a reservation to dine at Quilim?",
    a: "Walk-ins are always welcome, but reservations are highly recommended for weekends, large groups, and special occasions to guarantee your preferred seating.",
  },
  {
    q: "How can I make a reservation?",
    a: "You can reserve a table directly through our online reservation form, by calling +92 41 8540373, or by sending us a message on WhatsApp. Confirmation is usually within minutes.",
  },
  {
    q: "What type of cuisine does Quilim Restaurant serve?",
    a: "Quilim is a multi-cuisine fine-dining restaurant offering authentic Pakistani, Continental, Chinese, Thai, and BBQ dishes — all crafted by our experienced chefs using fresh, locally sourced ingredients.",
  },
  {
    q: "Does Quilim offer home delivery and takeaway?",
    a: "Yes, Quilim offers free home delivery within Faisalabad and convenient takeaway service. You can place your order via WhatsApp or by calling us directly.",
  },
  {
    q: "Do you cater for private events, weddings, and corporate functions?",
    a: "Absolutely. Our private banquet halls can host birthdays, anniversaries, engagements, and corporate events. Contact us for custom menus and group pricing.",
  },
  {
    q: "Is Quilim Restaurant family-friendly?",
    a: "Yes — Quilim is a fully family-friendly restaurant with comfortable family seating, a warm ambiance, and a menu designed to please guests of all ages.",
  },
  {
    q: "Do you have vegetarian options?",
    a: "Yes, our menu includes a wide range of vegetarian options across appetizers, soups, Chinese, Thai, continental and traditional categories.",
  },
  {
    q: "What is the average price range at Quilim?",
    a: "Quilim offers excellent value for fine dining. Most main courses range between PKR 400 and PKR 1,500, with platters and family deals available for larger groups.",
  },
  {
    q: "Do you accept credit and debit cards?",
    a: "Yes, we accept all major credit/debit cards as well as cash payments.",
  },
  {
    q: "Is parking available at Quilim Restaurant?",
    a: "Yes, dedicated parking is available right outside the restaurant, with valet assistance during busy hours.",
  },
];

function FAQPage() {
  usePageTitle("FAQ — Quilim Restaurant Faisalabad");
  const [open, setOpen] = useState<number | null>(0);

  // Inject FAQPage JSON-LD for SEO
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <PageHero title="Frequently Asked Questions" subtitle="Everything you need to know before you dine with us" />

      <section className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Card key={f.q} className="bg-card overflow-hidden border-border/60">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6 hover:bg-accent/30 transition-colors min-h-[64px]"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-serif text-base md:text-lg text-primary font-semibold">{f.q}</h3>
                  <ChevronDown className={`h-5 w-5 text-gold shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Still need help */}
        <Card className="mt-10 p-8 md:p-10 text-center bg-gradient-to-br from-secondary/60 to-accent/40">
          <h3 className="font-serif text-2xl md:text-3xl text-primary font-bold">Still have a question?</h3>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Our team is happy to help — reach out anytime and we'll get back within minutes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 h-12 min-h-[48px]">
              <a href={PHONE_TEL}><Phone className="mr-2 h-4 w-4" /> Call {PHONE_DISPLAY}</a>
            </Button>
            <Button asChild className="bg-[#25D366] hover:bg-[#1ebe57] text-white h-12 min-h-[48px]">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us</a>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 min-h-[48px]">
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer"><MapPin className="mr-2 h-4 w-4" /> Get Directions</a>
            </Button>
            <Button asChild variant="link" className="text-primary">
              <Link to="/contact">Contact Form →</Link>
            </Button>
          </div>
        </Card>
      </section>
    </Layout>
  );
}

export default FAQPage;
