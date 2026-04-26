import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dishParmesan from "@/assets/dish-parmesan.jpg";
import dishPlatter from "@/assets/dish-platter.jpg";
import dishSwiss from "@/assets/dish-swiss.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Quilim Restaurant" },
      { name: "description", content: "Explore Quilim's full menu: Continental, Chinese & Pakistani specialties crafted with passion." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc: string; price: string; img: string; tag?: string };
type Section = { id: string; label: string; items: Item[] };

const sections: Section[] = [
  {
    id: "specials", label: "Chef's Specials", items: [
      { name: "Parmesan Chicken", desc: "Pan-seared chicken in creamy parmesan velouté.", price: "PKR 1,950", img: dishParmesan, tag: "Bestseller" },
      { name: "Tarragon Steak", desc: "Tender beef with herbed tarragon butter.", price: "PKR 2,450", img: dishSwiss, tag: "Chef's Pick" },
      { name: "Cordon Bleu", desc: "Stuffed chicken with ham and gruyère.", price: "PKR 2,150", img: dishParmesan },
    ],
  },
  {
    id: "continental", label: "Continental", items: [
      { name: "Swiss Nipolo Chicken", desc: "Signature continental with rich white sauce.", price: "PKR 1,850", img: dishSwiss, tag: "Chef's Pick" },
      { name: "Grilled Fish Fillet", desc: "Lemon-butter grilled fish with veggies.", price: "PKR 2,050", img: dishParmesan },
    ],
  },
  {
    id: "chinese", label: "Chinese", items: [
      { name: "Chicken Manchurian", desc: "Crispy chicken in sweet & tangy gravy.", price: "PKR 1,250", img: dishSwiss },
      { name: "Kung Pao Chicken", desc: "Stir-fried with peanuts & dried chilies.", price: "PKR 1,350", img: dishPlatter },
      { name: "Dynamite Chicken", desc: "Spicy battered chicken with creamy sauce.", price: "PKR 1,450", img: dishParmesan, tag: "Bestseller" },
      { name: "Egg Fried Rice", desc: "Wok-tossed rice with egg & spring onion.", price: "PKR 850", img: dishPlatter },
    ],
  },
  {
    id: "pakistani", label: "Pakistani / Desi", items: [
      { name: "Chicken Karahi", desc: "Traditional spiced chicken in tomato gravy.", price: "PKR 1,650", img: dishPlatter, tag: "Bestseller" },
      { name: "Lunch Platter", desc: "Biryani, curry, naan & salad combo.", price: "PKR 1,550", img: dishPlatter, tag: "Chef's Pick" },
    ],
  },
  {
    id: "starters", label: "Starters & Soups", items: [
      { name: "Chef's Special Soup", desc: "Hearty chicken corn with herbs.", price: "PKR 550", img: dishSwiss },
      { name: "Crispy Chicken Wings", desc: "Golden fried wings with dip.", price: "PKR 950", img: dishParmesan },
    ],
  },
  {
    id: "drinks", label: "Beverages & Desserts", items: [
      { name: "Fresh Lime Mint", desc: "Refreshing lime with crushed mint.", price: "PKR 350", img: dishSwiss },
      { name: "Chocolate Lava Cake", desc: "Warm molten chocolate with ice cream.", price: "PKR 650", img: dishParmesan, tag: "Bestseller" },
    ],
  },
];

function MenuPage() {
  const [active, setActive] = useState(sections[0].id);
  return (
    <Layout>
      <PageHero title="Our Menu" subtitle="Crafted with passion, served with pride" />
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[240px_1fr] gap-10">
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
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-foreground border-border hover:border-gold"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </aside>

          <div className="space-y-16">
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                <div className="flex items-baseline gap-4 mb-6">
                  <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">{s.label}</h2>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {s.items.map((item) => (
                    <Card key={item.name} className="flex gap-4 p-4 hover-lift bg-card overflow-hidden">
                      <img src={item.img} alt={item.name} loading="lazy" className="w-28 h-28 object-cover rounded-md shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-lg text-foreground font-semibold">{item.name}</h3>
                          {item.tag && <Badge className="bg-gold text-gold-foreground hover:bg-gold shrink-0 text-[10px]">{item.tag}</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.desc}</p>
                        <p className="mt-2 text-primary font-semibold">{item.price}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
