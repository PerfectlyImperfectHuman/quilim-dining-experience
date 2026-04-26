import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Utensils, Clock, ChefHat, ArrowRight, Quote } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import dishParmesan from "@/assets/dish-parmesan.jpg";
import dishPlatter from "@/assets/dish-platter.jpg";
import dishSwiss from "@/assets/dish-swiss.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quilim Restaurant — Fine Dining in Faisalabad" },
      { name: "description", content: "Award-winning Pakistani, Continental & Chinese cuisine in Kohinoor City, Faisalabad. Reserve your table today." },
    ],
  }),
  component: Index,
});

const dishes = [
  { name: "Parmesan Chicken", desc: "Tender chicken in a creamy parmesan sauce.", img: dishParmesan },
  { name: "Lunch Platter", desc: "A symphony of biryani, curry & sides.", img: dishPlatter },
  { name: "Swiss Nipolo Chicken", desc: "Signature continental classic with rich cream.", img: dishSwiss },
];

const features = [
  { icon: Utensils, label: "4,000+ Happy Guests" },
  { icon: Star, label: "4.6 Star Rating" },
  { icon: Clock, label: "Open 7 Days a Week" },
  { icon: ChefHat, label: "Authentic Multi-Cuisine" },
];

const reviews = [
  { name: "Muhammad H.", text: "Truly one of the best restaurants. The Parmesan Chicken never disappoints — great taste, great quantity." },
  { name: "Sana R.", text: "Quilim is honestly my all-time favorite in Faisalabad. The ambiance is perfect and the staff goes above and beyond." },
  { name: "Omar A.", text: "The Lunch Platter is a symphony of flavors. Perfectly portioned and beautifully presented." },
];

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[600px] -mt-20 flex items-center justify-center text-center text-white">
        <img
          src={heroImg}
          alt="Quilim restaurant interior"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 px-4 max-w-4xl animate-fade-in-up">
          <span className="text-gold text-xs md:text-sm uppercase tracking-[0.4em]">
            Quilim · Faisalabad
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mt-4 leading-tight">
            An Unforgettable<br />Dining Experience
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
            Award-winning cuisine in the heart of Faisalabad
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 text-base px-8">
              <Link to="/reservations">Reserve a Table</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary text-base px-8">
              <Link to="/menu">View Our Menu</Link>
            </Button>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm">
            <Star className="h-4 w-4 fill-gold text-gold" />
            <span className="font-medium">4.6 / 5 — Rated by 4,000+ Guests</span>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-20 md:py-28 container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={aboutImg} alt="Quilim dining room" loading="lazy" className="rounded-lg shadow-elegant w-full h-[460px] object-cover" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-gold text-gold-foreground p-6 rounded-lg shadow-card">
              <div className="font-serif text-4xl font-bold">10+</div>
              <div className="text-xs uppercase tracking-widest">Years of Excellence</div>
            </div>
          </div>
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.3em]">About Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3">A Legacy of Flavor</h2>
            <div className="w-16 h-px bg-gold mt-4 mb-6" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              Quilim is a celebrated Faisalabad restaurant known for its refined Continental,
              Chinese, and Pakistani cuisine. Crafted by passionate chefs and served in an
              elegant, warmly-lit ambiance — every meal here is a memory in the making.
            </p>
            <Button asChild variant="link" className="mt-6 px-0 text-primary text-base">
              <Link to="/about">Learn Our Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured dishes */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-gold text-xs uppercase tracking-[0.3em]">Highlights</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3">Chef's Signatures</h2>
          <div className="mx-auto w-16 h-px bg-gold mt-4 mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {dishes.map((d) => (
              <Card key={d.name} className="overflow-hidden hover-lift bg-card border-border p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={d.img} alt={d.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-6 text-left">
                  <h3 className="font-serif text-2xl text-primary">{d.name}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{d.desc}</p>
                  <Link to="/menu" className="inline-flex items-center gap-1 mt-4 text-sm text-gold font-medium hover:gap-2 transition-all">
                    View Full Menu <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.label} className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-gold grid place-items-center mb-4 shadow-card">
                <f.icon className="h-7 w-7 text-primary" />
              </div>
              <p className="font-serif text-lg text-foreground">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,var(--gold),transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Ready for an Exceptional Meal?</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto text-lg">
            Book your table today and experience Faisalabad's finest dining.
          </p>
          <Button asChild size="lg" className="mt-8 bg-gold text-gold-foreground hover:bg-gold/90 px-8">
            <Link to="/reservations">Make a Reservation</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 container mx-auto px-4 lg:px-8 text-center">
        <span className="text-gold text-xs uppercase tracking-[0.3em]">Testimonials</span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3">What Our Guests Say</h2>
        <div className="mx-auto w-16 h-px bg-gold mt-4 mb-12" />

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <Card key={r.name} className="p-8 text-left bg-card hover-lift">
              <Quote className="h-8 w-8 text-gold mb-4" />
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="text-foreground/80 italic leading-relaxed">"{r.text}"</p>
              <p className="mt-5 font-serif text-primary font-semibold">— {r.name}</p>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}
