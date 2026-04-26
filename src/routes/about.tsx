
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Lamp, ChefHat } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import heroImg from "@/assets/hero.jpg";

const values = [
  { icon: Sparkles, title: "Quality Ingredients", desc: "Sourced fresh daily for unmatched flavor." },
  { icon: Heart, title: "Exceptional Service", desc: "Warm hospitality from start to finish." },
  { icon: Lamp, title: "Unforgettable Ambiance", desc: "Elegant interiors with warm lighting." },
];

const team = [
  { name: "Chef Imran Ali", title: "Executive Chef", bio: "20+ years crafting Continental & Pakistani classics.", img: heroImg },
  { name: "Chef Bilal Ahmed", title: "Head of Wok", bio: "Specialist in authentic Chinese stir-fry & sauces.", img: aboutImg },
];

function AboutPage() {
  return (
    <Layout>
      <PageHero title="The Story of Quilim" subtitle="Where flavor meets hospitality" />

      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src={aboutImg} alt="Quilim restaurant" loading="lazy" className="rounded-lg shadow-elegant w-full h-[480px] object-cover" />
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.3em]">Our Heritage</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mt-3">A Faisalabad Landmark</h2>
            <div className="w-16 h-px bg-gold mt-4 mb-6" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              Quilim is one of Faisalabad's most beloved dining destinations, celebrated for its
              authentic flavors, warm hospitality, and elegant atmosphere. With over 4,000 guests
              sharing their experience, Quilim has become a landmark of fine dining in the city.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              From sizzling karahis to delicate continental classics, every dish is prepared
              with intention — and served in a setting that turns ordinary meals into memories.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-4xl text-primary font-bold">Our Values</h2>
          <div className="mx-auto w-16 h-px bg-gold mt-4 mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <Card key={v.title} className="p-8 bg-card hover-lift text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-gold grid place-items-center mb-5">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-primary">{v.title}</h3>
                <p className="text-muted-foreground mt-3">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-20 text-center">
        <span className="text-gold text-xs uppercase tracking-[0.3em]">Our Team</span>
        <h2 className="font-serif text-4xl text-primary font-bold mt-3">Meet Our Kitchen</h2>
        <div className="mx-auto w-16 h-px bg-gold mt-4 mb-12" />
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((t) => (
            <Card key={t.name} className="overflow-hidden hover-lift bg-card p-0">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={t.img} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 text-left">
                <ChefHat className="h-5 w-5 text-gold mb-2" />
                <h3 className="font-serif text-2xl text-primary">{t.name}</h3>
                <p className="text-sm text-gold uppercase tracking-wider mt-1">{t.title}</p>
                <p className="text-muted-foreground mt-3 text-sm">{t.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { n: "4,000+", l: "Guests Served" },
            { n: "4.6 ★", l: "Average Rating" },
            { n: "10+", l: "Years of Excellence" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-serif text-5xl md:text-6xl font-bold text-gold">{s.n}</div>
              <div className="mt-2 uppercase tracking-widest text-sm text-white/80">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
