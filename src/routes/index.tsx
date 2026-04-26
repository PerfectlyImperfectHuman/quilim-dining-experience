import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Utensils, Clock, ChefHat, ArrowRight, Quote, MapPin, Award } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";
import heroImg from "@/assets/hero.jpg";
import interiorImg from "@/assets/interior.jpg";
import dishParmesan from "@/assets/dish-parmesan.jpg";
import dishPlatter from "@/assets/dish-platter.jpg";
import dishSwiss from "@/assets/dish-swiss.jpg";

const dishes = [
  { name: "Parmesan Chicken", desc: "Pan-seared chicken in a velvety parmesan cream sauce — a Quilim favourite.", img: dishParmesan, tag: "Bestseller" },
  { name: "Quilim Lunch Platter", desc: "Egg fried rice, chicken drumsticks, manchurian and chowmein on one platter.", img: dishPlatter, tag: "Most Loved" },
  { name: "Swiss Nipolo Chicken", desc: "Continental chicken with rich mushroom cream sauce — guests' favourite signature.", img: dishSwiss, tag: "Chef's Pick" },
];

const features = [
  { icon: Star, label: "4.6 / 5 Rating" },
  { icon: Utensils, label: "4,000+ Happy Guests" },
  { icon: Clock, label: "Open 7 Days a Week" },
  { icon: ChefHat, label: "Authentic Multi-Cuisine" },
];

type Review = {
  name: string;
  rating: number;
  text: string;
  meal?: string;
  price?: string;
  localGuide?: boolean;
};

const reviews: Review[] = [
  { name: "Sawera Haroon", rating: 5, text: "Always had a perfect meal at Quilim. The food quality is consistently excellent and portion sizes are generous. The Parmesan Chicken never disappoints — highly recommended!", meal: "Dinner", localGuide: true },
  { name: "Alishba Rajpoot", rating: 5, text: "Quilim is my all-time favourite in Faisalabad. The lunch platter, chicken karahi, tarragon steak — everything was full of flavor. The manager truly lives up to 'hospitality expert'!", meal: "Lunch", price: "Rs 2,000–3,000" },
  { name: "Muhammad Shahbaz", rating: 4, text: "The Lunch Platter is a symphony of flavors — fluffy egg fried rice, crispy drumsticks, Manchurian, and chowmein. Excellent value at around PKR 1,000. A must-try.", meal: "Lunch", price: "Rs 500–1,000" },
  { name: "Hashir Naeem", rating: 5, text: "Outstanding from start to finish. Fresh ingredients, authentic flavors, attentive service — and they offered us complimentary sweets! Quilim exceeds expectations in every way.", meal: "Dinner", localGuide: true },
  { name: "Junaid Javaid", rating: 5, text: "Amazed by the food, service, and ambiance — everything was 10/10. Highly recommend the Swiss Nipolo Chicken, it was incredible.", meal: "Food: 5 · Service: 5 · Atmosphere: 5" },
  { name: "Eisha Zahid", rating: 5, text: "Rich flavors, beautifully balanced dishes and an ambiance that elevates the entire experience. Truly unforgettable dining.", meal: "Dinner" },
  { name: "Muhammad Zain Maqsood", rating: 5, text: "Great place for family time. Relaxed vibe and a delicious menu.", meal: "Dinner", price: "Rs 1,000–2,000" },
  { name: "Samina Hussain", rating: 5, text: "My favourite restaurant ever — the customer service is impeccable and the food is so delicious!", meal: "Dinner", localGuide: true },
  { name: "Abubakar Malik", rating: 5, text: "The karahi was full of rich flavor and perfectly cooked. Kababs were juicy and well-seasoned. Food served fresh and hot. Highly recommended for anyone who loves good desi food." },
];

const initials = (n: string) => n.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();

function Index() {
  usePageTitle("Quilim Restaurant — Fine Dining in Faisalabad");
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[94vh] min-h-[640px] -mt-20 flex items-center justify-center text-center text-white">
        <img
          src={heroImg}
          alt="Quilim fine dining restaurant in Faisalabad"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0_0_0/0.55)_0%,oklch(0_0_0/0.78)_100%)]" />
        <div className="relative z-10 px-4 max-w-4xl animate-fade-in-up">
          <span className="inline-flex items-center gap-2 text-gold text-xs md:text-sm uppercase tracking-[0.4em]">
            <MapPin className="h-3.5 w-3.5" /> Quilim · Faisalabad
          </span>
          <h1 className="font-serif font-bold mt-5 leading-[1.05]" style={{ fontSize: "clamp(2.25rem, 6vw, 5.5rem)" }}>
            Experience Fine Dining<br />
            <span className="text-gold">in Faisalabad</span>
          </h1>
          <p className="mt-6 text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Home to 4,000+ satisfied guests and a 4.6-star dining experience —
            authentic Pakistani, Continental & Chinese cuisine served with warm hospitality.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 text-base px-9 h-12 min-h-[48px]">
              <Link to="/reservations">Reserve a Table</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary text-base px-9 h-12 min-h-[48px]">
              <Link to="/menu">View Our Menu</Link>
            </Button>
          </div>
          <div className="mt-9 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur border border-white/25 text-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
            </div>
            <span className="font-medium">4.6 Rating · 4,000+ Reviews on Google</span>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-20 md:py-28 container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <img src={interiorImg} alt="Warm candlelit dining hall at Quilim Faisalabad" loading="lazy" className="rounded-lg shadow-elegant w-full h-[480px] object-cover" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-gold text-gold-foreground p-6 rounded-lg shadow-card">
              <div className="font-serif text-4xl font-bold">10+</div>
              <div className="text-xs uppercase tracking-widest">Years of Excellence</div>
            </div>
          </div>
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.3em]">About Quilim</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3">A Faisalabad Dining Landmark</h2>
            <div className="w-16 h-px bg-gold mt-5 mb-7" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              For over a decade, Quilim has been one of Faisalabad's most loved
              destinations for fine dining — known for its refined Continental,
              Chinese and Pakistani cuisine, served in an elegant, warmly-lit ambiance.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              Every plate is crafted by passionate chefs and served with the
              kind of warmth that turns a meal into a memory.
            </p>
            <Button asChild variant="link" className="mt-6 px-0 text-primary text-base font-semibold">
              <Link to="/about">Learn Our Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured dishes */}
      <section className="py-20 md:py-24 bg-secondary/40">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-gold text-xs uppercase tracking-[0.3em]">From Our Kitchen</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3">Chef's Signatures</h2>
          <div className="mx-auto w-16 h-px bg-gold mt-5 mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">The dishes our guests come back for, again and again.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {dishes.map((d) => (
              <Card key={d.name} className="overflow-hidden hover-lift bg-card border-border p-0 group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={d.img} alt={d.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {d.tag && (
                    <span className="absolute top-3 left-3 bg-gold text-gold-foreground text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full shadow-card">
                      {d.tag}
                    </span>
                  )}
                </div>
                <div className="p-6 text-left">
                  <h3 className="font-serif text-2xl text-primary">{d.name}</h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{d.desc}</p>
                  <Link to="/menu" className="inline-flex items-center gap-1 mt-5 text-sm text-gold font-medium hover:gap-2 transition-all">
                    View Full Menu <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/menu">Explore Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.label} className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-gold grid place-items-center mb-4 shadow-card">
                <f.icon className="h-7 w-7 text-primary" />
              </div>
              <p className="font-serif text-base md:text-lg text-foreground">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Google Review Block */}
      <section className="py-16 bg-gradient-to-br from-secondary/60 to-accent/40 border-y border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="flex items-center gap-1 text-3xl">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-7 w-7 fill-gold text-gold" />)}
            </div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">
            Rated <span className="text-gold">4.6 stars</span> by 4,000+ customers on Google
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Faisalabad's most reviewed fine-dining restaurant — and we're just getting started.
          </p>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,var(--gold),transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative">
          <span className="text-gold text-xs uppercase tracking-[0.3em]">Reservations</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">Ready for an Exceptional Meal?</h2>
          <p className="mt-4 text-white/85 max-w-xl mx-auto text-lg">
            Book your table today and experience Faisalabad's finest dining.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 px-8 h-12 min-h-[48px]">
              <Link to="/reservations">Make a Reservation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary h-12 min-h-[48px]">
              <a href="tel:+924118540373">Call +92 41 8540373</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 container mx-auto px-4 lg:px-8 text-center">
        <span className="text-gold text-xs uppercase tracking-[0.3em]">Testimonials</span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3">What Our Guests Say</h2>
        <div className="mx-auto w-16 h-px bg-gold mt-5 mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {reviews.map((r) => (
            <Card key={r.name} className="p-6 bg-card hover-lift flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold grid place-items-center text-primary font-serif font-bold text-lg shrink-0">
                  {initials(r.name)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-serif text-primary font-semibold truncate">{r.name}</p>
                    {r.localGuide && (
                      <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wider bg-gold/15 text-gold-foreground border border-gold/40 rounded-full px-2 py-0.5">
                        <Award className="h-2.5 w-2.5 text-gold" /> Local Guide
                      </span>
                    )}
                  </div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />)}
                  </div>
                </div>
              </div>
              <Quote className="h-5 w-5 text-gold/60 mb-2" />
              <p className="text-foreground/80 text-sm leading-relaxed flex-1">"{r.text}"</p>
              <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 flex-wrap">
                {r.meal && <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-secondary/60 px-2 py-1 rounded">{r.meal}</span>}
                {r.price && <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-secondary/60 px-2 py-1 rounded">{r.price}</span>}
                <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground">Google Review</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Hidden references to retain imports for tree-shake clarity */}
      <div className="hidden">
        <img src={dishKarahi} alt="" />
        <img src={dishChinese} alt="" />
      </div>
    </Layout>
  );
}

export default Index;
