import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Lamp, ChefHat, Calendar } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";
import interiorImg from "@/assets/interior.jpg";
import chef1 from "@/assets/chef-1.jpg";
import chef2 from "@/assets/chef-2.jpg";

const values = [
  { icon: Sparkles, title: "Quality Ingredients", desc: "Sourced fresh daily for unmatched flavor." },
  { icon: Heart, title: "Exceptional Service", desc: "Warm hospitality from start to finish." },
  { icon: Lamp, title: "Unforgettable Ambiance", desc: "Elegant interiors with warm lighting." },
];

const milestones = [
  { year: "Founded", title: "Quilim Opens", desc: "Born from a passion for hospitality in Faisalabad." },
  { year: "Year 2", title: "First Signature Dish", desc: "Parmesan Chicken becomes a guest favourite." },
  { year: "Year 4", title: "Private Dining Added", desc: "Banquet halls launched for celebrations." },
  { year: "Year 8", title: "4,000+ Guests Served", desc: "A milestone of trust and loyalty." },
  { year: "Today", title: "4.6 ★ on Google", desc: "Faisalabad's most reviewed fine-dining restaurant." },
];

const team = [
  { name: "Executive Chef", title: "Pakistani & Continental", bio: "[CHEF PHOTO 1 — To be updated]", img: chef1 },
  { name: "Head of Wok", title: "Chinese & Thai Cuisine", bio: "[CHEF PHOTO 2 — To be updated]", img: chef2 },
];

function AboutPage() {
  usePageTitle("Our Story — Quilim Restaurant Faisalabad");
  return (
    <Layout>
      <PageHero title="The Story of Quilim" subtitle="Where flavor meets hospitality" />

      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src={interiorImg} alt="Warm candlelit interior at Quilim Faisalabad" loading="lazy" className="rounded-lg shadow-elegant w-full h-[480px] object-cover" />
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

      {/* Values */}
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

      {/* Timeline */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="text-center mb-14">
          <span className="text-gold text-xs uppercase tracking-[0.3em]">Our Journey</span>
          <h2 className="font-serif text-4xl text-primary font-bold mt-3">A Decade of Memorable Meals</h2>
          <div className="mx-auto w-16 h-px bg-gold mt-4" />
        </div>

        {/* Desktop horizontal */}
        <div className="hidden md:block relative">
          <div className="absolute top-8 left-0 right-0 h-px bg-gold/40" />
          <div className="grid grid-cols-5 gap-4 relative">
            {milestones.map((m) => (
              <div key={m.year} className="text-center">
                <div className="mx-auto relative w-16 h-16 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-elegant z-10">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="mt-5 text-xs uppercase tracking-widest text-gold font-semibold">{m.year}</div>
                <h3 className="font-serif text-lg text-primary font-bold mt-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden relative pl-12">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gold/50" />
          <div className="space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-12 w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-card">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="text-xs uppercase tracking-widest text-gold font-semibold">{m.year}</div>
                <h3 className="font-serif text-lg text-primary font-bold mt-1">{m.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-gold text-xs uppercase tracking-[0.3em]">Our Culinary Team</span>
          <h2 className="font-serif text-4xl text-primary font-bold mt-3">The Hands Behind Every Plate</h2>
          <div className="mx-auto w-16 h-px bg-gold mt-4 mb-12" />
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((t) => (
              <Card key={t.name} className="overflow-hidden hover-lift bg-card p-0">
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img src={t.img} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-left">
                  <ChefHat className="h-5 w-5 text-gold mb-2" />
                  <h3 className="font-serif text-2xl text-primary">{t.name}</h3>
                  <p className="text-sm text-gold uppercase tracking-wider mt-1">{t.title}</p>
                  <p className="text-muted-foreground mt-3 text-sm italic">{t.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
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
