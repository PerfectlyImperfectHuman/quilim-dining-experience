import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChefHat, Flame } from "lucide-react";
import dishParmesan from "@/assets/dish-parmesan.jpg";
import dishPlatter from "@/assets/dish-platter.jpg";
import dishSwiss from "@/assets/dish-swiss.jpg";
import dishKarahi from "@/assets/dish-karahi.jpg";
import dishBbq from "@/assets/dish-bbq.jpg";
import dishChinese from "@/assets/dish-chinese.jpg";

type Tag = "Bestseller" | "Chef's Pick" | "Spicy" | "New";
type Item = { name: string; desc: string; price: string; img: string; tag?: Tag };
type Section = { id: string; label: string; items: Item[] };

const sections: Section[] = [
  {
    id: "specials", label: "Chef's Specials", items: [
      { name: "Parmesan Chicken", desc: "Pan-seared chicken in a creamy parmesan velouté with sautéed vegetables.", price: "PKR 1,950", img: dishParmesan, tag: "Bestseller" },
      { name: "Quilim Lunch Platter", desc: "Chicken biryani, curry, raita, salad and naan — served on a copper thali.", price: "PKR 1,550", img: dishPlatter, tag: "Chef's Pick" },
      { name: "Cordon Bleu", desc: "Crispy chicken stuffed with smoked ham and gruyère cheese.", price: "PKR 2,150", img: dishParmesan },
    ],
  },
  {
    id: "continental", label: "Continental", items: [
      { name: "Swiss Nipolo Chicken", desc: "Signature continental chicken with rich mushroom cream sauce.", price: "PKR 1,850", img: dishSwiss, tag: "Chef's Pick" },
      { name: "Chicken Stroganoff", desc: "Tender chicken in sour cream and mushroom gravy with rice.", price: "PKR 1,750", img: dishSwiss },
      { name: "Grilled Fish Fillet", desc: "Lemon-butter grilled fish with steamed seasonal vegetables.", price: "PKR 2,050", img: dishParmesan },
      { name: "Beef Steak (Black Pepper)", desc: "Tender sirloin in our house black-pepper sauce, served with fries.", price: "PKR 2,650", img: dishParmesan, tag: "Bestseller" },
    ],
  },
  {
    id: "chinese", label: "Chinese", items: [
      { name: "Chicken Manchurian", desc: "Crispy chicken cubes tossed in sweet & tangy Manchurian gravy.", price: "PKR 1,250", img: dishChinese, tag: "Bestseller" },
      { name: "Kung Pao Chicken", desc: "Wok-fried chicken with peanuts, dried chilies and bell peppers.", price: "PKR 1,350", img: dishChinese, tag: "Spicy" },
      { name: "Dynamite Chicken", desc: "Crispy battered chicken in our signature spicy creamy sauce.", price: "PKR 1,450", img: dishChinese, tag: "Chef's Pick" },
      { name: "Chicken Chowmein", desc: "Wok-tossed noodles with chicken, vegetables and soy.", price: "PKR 1,150", img: dishChinese },
      { name: "Egg Fried Rice", desc: "Classic wok-fried rice with egg and spring onions.", price: "PKR 850", img: dishChinese },
      { name: "Hot & Sour Soup", desc: "Tangy chicken soup with mushrooms and bamboo shoots.", price: "PKR 550", img: dishChinese },
    ],
  },
  {
    id: "pakistani", label: "Pakistani / Desi", items: [
      { name: "Chicken Karahi (Half)", desc: "Traditional spiced chicken karahi in tomato and ginger gravy.", price: "PKR 1,650", img: dishKarahi, tag: "Bestseller" },
      { name: "Chicken Karahi (Full)", desc: "Full karahi — perfect for sharing, served with naan.", price: "PKR 2,950", img: dishKarahi },
      { name: "Mutton Karahi", desc: "Slow-cooked mutton in spices, ginger and green chili.", price: "PKR 3,450", img: dishKarahi, tag: "Chef's Pick" },
      { name: "Chicken Biryani", desc: "Aromatic basmati rice layered with spiced chicken — served with raita.", price: "PKR 850", img: dishPlatter, tag: "Bestseller" },
      { name: "Daal Makhani", desc: "Slow-cooked black lentils finished with cream and butter.", price: "PKR 750", img: dishPlatter },
    ],
  },
  {
    id: "bbq", label: "BBQ & Grill", items: [
      { name: "Mixed BBQ Platter", desc: "Chicken tikka, malai boti, seekh kebab — straight off the grill.", price: "PKR 2,450", img: dishBbq, tag: "Bestseller" },
      { name: "Chicken Tikka", desc: "Marinated chicken char-grilled to smoky perfection.", price: "PKR 950", img: dishBbq },
      { name: "Malai Boti", desc: "Creamy, tender chicken boti grilled over charcoal.", price: "PKR 1,150", img: dishBbq, tag: "Chef's Pick" },
      { name: "Seekh Kebab (4 pcs)", desc: "Spiced minced beef skewers grilled fresh.", price: "PKR 1,050", img: dishBbq },
    ],
  },
  {
    id: "starters", label: "Starters & Soups", items: [
      { name: "Chef's Special Soup", desc: "Hearty chicken corn soup with herbs and pepper.", price: "PKR 550", img: dishSwiss },
      { name: "Crispy Chicken Wings", desc: "Golden fried wings with garlic mayo dip.", price: "PKR 950", img: dishParmesan },
      { name: "Chicken Spring Rolls (4)", desc: "Crispy rolls stuffed with chicken & vegetables.", price: "PKR 650", img: dishChinese },
    ],
  },
  {
    id: "drinks", label: "Beverages & Desserts", items: [
      { name: "Fresh Lime Mint", desc: "Refreshing lime with crushed mint leaves.", price: "PKR 350", img: dishSwiss },
      { name: "Mango Shake", desc: "Thick, creamy fresh mango shake (seasonal).", price: "PKR 450", img: dishSwiss },
      { name: "Chocolate Lava Cake", desc: "Warm molten-centre cake with vanilla ice cream.", price: "PKR 650", img: dishParmesan, tag: "Bestseller" },
      { name: "Crème Brûlée", desc: "Classic vanilla custard with caramelised sugar top.", price: "PKR 550", img: dishParmesan },
    ],
  },
];

const tagStyle = (tag: Tag) => {
  switch (tag) {
    case "Bestseller": return "bg-gold text-gold-foreground";
    case "Chef's Pick": return "bg-primary text-primary-foreground";
    case "Spicy": return "bg-destructive text-destructive-foreground";
    case "New": return "bg-accent-foreground text-accent";
  }
};

function MenuPage() {
  const [active, setActive] = useState(sections[0].id);
  return (
    <Layout>
      <PageHero title="Our Menu" subtitle="Crafted with passion · Served with pride" />

      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[260px_1fr] gap-12">
          {/* Sidebar / tabs */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActive(s.id);
                    document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`shrink-0 lg:shrink text-left px-4 py-3 rounded-md text-sm font-medium transition-all border ${
                    active === s.id
                      ? "bg-primary text-primary-foreground border-primary shadow-card"
                      : "bg-card text-foreground border-border hover:border-gold"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </aside>

          <div className="space-y-20">
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                <div className="flex items-baseline gap-4 mb-8">
                  <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">{s.label}</h2>
                  <div className="flex-1 h-px bg-gold/40" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {s.items.map((item) => (
                    <Card key={item.name} className="flex gap-4 p-4 hover-lift bg-card overflow-hidden border-border/60">
                      <div className="relative shrink-0">
                        <img
                          src={item.img}
                          alt={item.name}
                          loading="lazy"
                          className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-md"
                        />
                        {item.tag && (
                          <Badge className={`absolute -top-2 -left-2 ${tagStyle(item.tag)} text-[9px] uppercase tracking-wider px-2 py-0.5 shadow-card flex items-center gap-1`}>
                            {item.tag === "Chef's Pick" && <ChefHat className="h-2.5 w-2.5" />}
                            {item.tag === "Spicy" && <Flame className="h-2.5 w-2.5" />}
                            {item.tag}
                          </Badge>
                        )}
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col">
                        <h3 className="font-serif text-lg text-foreground font-semibold leading-tight">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2 flex-1">{item.desc}</p>
                        <p className="mt-3 text-primary font-bold text-lg font-serif">{item.price}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-secondary/40 rounded-lg p-10">
          <h3 className="font-serif text-3xl text-primary font-bold">Ready to Taste It All?</h3>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Reserve your table at Quilim Faisalabad today — or call us to order.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild className="bg-primary hover:bg-primary/90 h-12 px-8">
              <Link to="/reservations">Reserve a Table</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 px-8">
              <a href="tel:+924418540373">Call +92 41 8540373</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default MenuPage;
