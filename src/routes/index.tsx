import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Utensils, Clock, ChefHat, ArrowRight, Quote, MapPin } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import dishParmesan from "@/assets/dish-parmesan.jpg";
import dishPlatter from "@/assets/dish-platter.jpg";
import dishKarahi from "@/assets/dish-karahi.jpg";
import dishBbq from "@/assets/dish-bbq.jpg";
import dishChinese from "@/assets/dish-chinese.jpg";

const dishes = [
  { name: "Parmesan Chicken", desc: "Pan-seared chicken in a velvety parmesan cream sauce — a Quilim favourite.", img: dishParmesan, tag: "Bestseller" },
  { name: "Quilim Lunch Platter", desc: "Chicken biryani, curry, raita, salad and naan — all on one copper thali.", img: dishPlatter, tag: "Most Loved" },
  { name: "Sizzling Chicken Karahi", desc: "Traditional desi karahi cooked in tomato, ginger and green chilies.", img: dishKarahi, tag: "Chef's Pick" },
  { name: "Mixed BBQ Platter", desc: "Tikka, malai boti and seekh kebabs straight off the charcoal grill.", img: dishBbq },
  { name: "Chicken Manchurian", desc: "Crispy chicken tossed in our signature sweet & tangy Chinese sauce.", img: dishChinese },
];

const features = [
  { icon: Utensils, label: "4,000+ Happy Guests" },
  { icon: Star, label: "4.6 ★ Google Rating" },
  { icon: Clock, label: "Open Daily · 11 AM – 12 AM" },
  { icon: ChefHat, label: "Pakistani · Continental · Chinese" },
];

const reviews = [
  { name: "Muhammad H.", text: "Truly one of the best restaurants in Faisalabad. The Parmesan Chicken never disappoints — great taste, great quantity.", rating: 5 },
  { name: "Sana R.", text: "Quilim is honestly my all-time favourite. The ambiance is perfect and the staff goes above and beyond every single time.", rating: 5 },
  { name: "Omar A.", text: "The Lunch Platter is a symphony of flavours. Perfectly portioned, beautifully presented and worth every rupee.", rating: 5 },
];

function Index() {
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0_0_0/0.55)_0%,oklch(0_0_0/0.75)_100%)]" />
        <div className="relative z-10 px-4 max-w-4xl animate-fade-in-up">
          <span className="inline-flex items-center gap-2 text-gold text-xs md:text-sm uppercase tracking-[0.4em]">
            <MapPin className="h-3.5 w-3.5" /> Quilim · Faisalabad
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-bold mt-5 leading-[1.05]">
            Experience Fine Dining<br />
            <span className="text-gold">in Faisalabad</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Home to 4,000+ satisfied guests and a 4.6-star dining experience —
            authentic Pakistani, Continental & Chinese cuisine served with warm hospitality.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 text-base px-9 h-12">
              <Link to="/reservations">Reserve a Table</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary text-base px-9 h-12">
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
            <img src={aboutImg} alt="Quilim dining room in Faisalabad" loading="lazy" className="rounded-lg shadow-elegant w-full h-[480px] object-cover" />
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
            {dishes.slice(0, 3).map((d) => (
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
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 px-8 h-12">
              <Link to="/reservations">Make a Reservation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary h-12">
              <a href="tel:+924418540373">Call +92 41 8540373</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 container mx-auto px-4 lg:px-8 text-center">
        <span className="text-gold text-xs uppercase tracking-[0.3em]">Testimonials</span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3">What Our Guests Say</h2>
        <div className="mx-auto w-16 h-px bg-gold mt-5 mb-12" />

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <Card key={r.name} className="p-8 text-left bg-card hover-lift">
              <Quote className="h-8 w-8 text-gold mb-4" />
              <div className="flex gap-1 mb-3">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="text-foreground/80 italic leading-relaxed">"{r.text}"</p>
              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                <p className="font-serif text-primary font-semibold">— {r.name}</p>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Google Review</span>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Index;
