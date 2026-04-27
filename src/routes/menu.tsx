import { useEffect, useMemo, useRef, useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ChefHat, Flame, Search, Star, Plus, Minus, ShoppingBag, MessageCircle, X, Trash2 } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";
import { WHATSAPP_NUMBER } from "@/lib/links";

import dishParmesan from "@/assets/dish-parmesan.jpg";
import dishPlatter from "@/assets/dish-platter.jpg";
import dishSwiss from "@/assets/dish-swiss.jpg";
import dishKarahi from "@/assets/dish-karahi.jpg";
import dishBbq from "@/assets/dish-bbq.jpg";
import dishChinese from "@/assets/dish-chinese.jpg";
import dishTarragon from "@/assets/dish-tarragon.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishMutton from "@/assets/dish-mutton.jpg";
import dishBrownie from "@/assets/dish-brownie.jpg";
import dishColdCoffee from "@/assets/dish-coldcoffee.jpg";
import dishMintMargarita from "@/assets/dish-mintmargarita.jpg";
import dishNaan from "@/assets/dish-naan.jpg";
import dishSoup from "@/assets/dish-soup.jpg";
import dishAppetizer from "@/assets/dish-appetizer.jpg";
import dishRice from "@/assets/dish-rice.jpg";
import dishSalad from "@/assets/dish-salad.jpg";
import realAppetizer from "@/assets/real-appetizer-platter.jpg";
import realBbqCollage from "@/assets/real-bbq-collage.jpg";

type Tag = "Bestseller" | "Chef's Pick" | "Spicy";
type Item = { name: string; price: string; img: string; tag?: Tag };
type Section = { id: string; label: string; items: Item[] };

const PIC = {
  app: realAppetizer, soup: dishSoup, chinese: dishChinese, rice: dishRice,
  cont: dishParmesan, thai: dishChinese, pak: dishKarahi, mutton: dishMutton,
  bbq: realBbqCollage, naan: dishNaan, bev: dishMintMargarita, salad: dishSalad,
  dessert: dishBrownie,
};

const sections: Section[] = [
  { id: "appetizers", label: "Appetizers", items: [
    { name: "Wasabi Crusted Fish (10 pcs)", price: "PKR 599", img: PIC.app },
    { name: "Fried Fish (3 pcs)", price: "PKR 599", img: PIC.app },
    { name: "Wasabi Prawn (8 pcs)", price: "PKR 899", img: PIC.app },
    { name: "Butter Fried Prawn (8 pcs)", price: "PKR 899", img: PIC.app },
    { name: "Stuffed Cheese Prawn (8 pcs)", price: "PKR 899", img: PIC.app },
    { name: "Finger Fish (10 pcs)", price: "PKR 599", img: PIC.app },
    { name: "Cheese Fried Chicken (10 pcs)", price: "PKR 569", img: PIC.app },
    { name: "Crunch Chicken (10 pcs)", price: "PKR 569", img: PIC.app },
    { name: "Tempura Chicken (10 pcs)", price: "PKR 599", img: PIC.app },
    { name: "Chicken Cheese Mint Roll", price: "PKR 599", img: PIC.app },
    { name: "Chicken Bamboo Stick", price: "PKR 599", img: PIC.app },
    { name: "Chicken Honey Wings", price: "PKR 399", img: PIC.app },
    { name: "Chicken Wonton", price: "PKR 429", img: PIC.app },
    { name: "Dhaka Chicken", price: "PKR 399", img: PIC.app },
    { name: "Stuffed Cheese Potato", price: "PKR 399", img: dishAppetizer },
    { name: "Chicken Quesadillas", price: "PKR 499", img: dishAppetizer },
    { name: "Chicken Drum Stick (10 pcs)", price: "PKR 599", img: dishAppetizer },
    { name: "Doritos Nachos", price: "PKR 399", img: dishAppetizer },
    { name: "Fish Cracker", price: "PKR 179", img: dishAppetizer },
    { name: "French Fries", price: "PKR 569", img: dishAppetizer },
  ]},
  { id: "soups", label: "Soups", items: [
    { name: "Quilim Special Soup", price: "PKR 509", img: PIC.soup, tag: "Chef's Pick" },
    { name: "Red Szechuan Soup", price: "PKR 499", img: PIC.soup },
    { name: "Hot & Sour Soup", price: "PKR 449", img: PIC.soup },
    { name: "Seafood Chowder", price: "PKR 509", img: PIC.soup },
    { name: "Thai Soup", price: "PKR 429", img: PIC.soup },
    { name: "Chicken Corn Soup", price: "PKR 429", img: PIC.soup },
    { name: "Chicken Vegetable Soup", price: "PKR 429", img: PIC.soup },
    { name: "19B Soup", price: "PKR 499", img: PIC.soup },
  ]},
  { id: "chinese", label: "Chinese", items: [
    { name: "Chicken Manchurian", price: "PKR 499", img: dishChinese, tag: "Chef's Pick" },
    { name: "Black Pepper Chicken with Pineapple", price: "PKR 499", img: PIC.chinese },
    { name: "Chicken with Pineapple", price: "PKR 499", img: PIC.chinese },
    { name: "Chicken Almond", price: "PKR 499", img: PIC.chinese },
    { name: "Kung Pao Chicken", price: "PKR 499", img: PIC.chinese, tag: "Spicy" },
    { name: "Garlic Chicken with Butter Mushroom", price: "PKR 499", img: PIC.chinese },
    { name: "Lemon Chicken", price: "PKR 499", img: PIC.chinese },
    { name: "Szechuan Chicken", price: "PKR 499", img: PIC.chinese, tag: "Spicy" },
    { name: "Whole Chicken Chilli", price: "PKR 639", img: PIC.chinese, tag: "Spicy" },
    { name: "Mongolian Chicken", price: "PKR 499", img: PIC.chinese },
    { name: "Chicken Chilli Onion", price: "PKR 499", img: PIC.chinese },
    { name: "Chicken Vegetable", price: "PKR 399", img: PIC.chinese },
    { name: "Chicken Chilli Dry", price: "PKR 479", img: PIC.chinese },
  ]},
  { id: "rice", label: "Rice & Chowmein", items: [
    { name: "Quilim Special Rice", price: "PKR 349", img: PIC.rice },
    { name: "Garlic Rice", price: "PKR 399", img: PIC.rice },
    { name: "Chicken Fried Rice", price: "PKR 349", img: PIC.rice, tag: "Bestseller" },
    { name: "Egg Fried Rice", price: "PKR 339", img: PIC.rice, tag: "Bestseller" },
    { name: "Chicken Masala Rice", price: "PKR 349", img: PIC.rice },
    { name: "Lemon Coriander Rice", price: "PKR 399", img: PIC.rice },
    { name: "Butter Steamed Rice", price: "PKR 329", img: PIC.rice },
    { name: "Thai Special Rice", price: "PKR 349", img: PIC.rice },
    { name: "Special Chowmein", price: "PKR 399", img: PIC.rice },
    { name: "Chicken Chowmein", price: "PKR 369", img: PIC.rice },
    { name: "American Chop Suey", price: "PKR 369", img: PIC.rice },
    { name: "Vegetable Chop Suey", price: "PKR 369", img: PIC.rice },
  ]},
  { id: "continental", label: "Continental", items: [
    { name: "Quilim Special Steak", price: "PKR 649", img: dishSteak, tag: "Chef's Pick" },
    { name: "Combination Steak", price: "PKR 649", img: dishSteak },
    { name: "Tarragon Steak", price: "PKR 649", img: dishTarragon, tag: "Chef's Pick" },
    { name: "Mexican Steak", price: "PKR 539", img: dishSteak, tag: "Spicy" },
    { name: "Jalapeño Steak", price: "PKR 649", img: dishSteak, tag: "Spicy" },
    { name: "New York Steak", price: "PKR 649", img: dishSteak },
    { name: "Mushroom Steak", price: "PKR 649", img: dishSteak },
    { name: "Pepper Steak", price: "PKR 649", img: dishSteak },
    { name: "Beef Steak", price: "PKR 749", img: dishSteak },
    { name: "Fish Steak", price: "PKR 749", img: dishSteak },
    { name: "Stuffed Chicken", price: "PKR 649", img: PIC.cont },
    { name: "Italian Chicken", price: "PKR 629", img: PIC.cont },
    { name: "Teriyaki Chicken", price: "PKR 599", img: PIC.cont },
    { name: "Chicken Tapanaki", price: "PKR 599", img: PIC.cont },
    { name: "Coconut Chicken", price: "PKR 599", img: PIC.cont },
    { name: "Parmesan Chicken", price: "PKR 599", img: dishParmesan, tag: "Bestseller" },
    { name: "Swiss Nipolo Chicken", price: "PKR 599", img: dishSwiss, tag: "Chef's Pick" },
    { name: "Quilim Special Pasta", price: "PKR 499", img: PIC.cont },
    { name: "Rattlesnake Pasta", price: "PKR 499", img: PIC.cont, tag: "Spicy" },
    { name: "Tikka Pasta", price: "PKR 499", img: PIC.cont },
  ]},
  { id: "thai", label: "Thai Cuisine", items: [
    { name: "Thai Sweet Chicken", price: "PKR 499", img: PIC.thai },
    { name: "Oyster Chicken", price: "PKR 499", img: PIC.thai },
    { name: "Chicken Green Curry", price: "PKR 529", img: PIC.thai },
    { name: "Chicken Cashew Nut", price: "PKR 519", img: PIC.thai },
    { name: "Sweet & Sour Fish", price: "PKR 599", img: PIC.thai },
    { name: "Garlic Fish", price: "PKR 599", img: PIC.thai },
  ]},
  { id: "pakistani", label: "Pakistani Traditional", items: [
    { name: "Chicken Mughlai Handi", price: "PKR 795", img: PIC.pak },
    { name: "Chicken Hyderabadi Handi", price: "PKR 795", img: PIC.pak },
    { name: "Chicken Kashmiri Handi", price: "PKR 795", img: PIC.pak },
    { name: "Chicken Handi", price: "PKR 795", img: PIC.pak },
    { name: "Chicken Madrasi Handi", price: "PKR 795", img: PIC.pak, tag: "Spicy" },
    { name: "Chicken Karahi", price: "PKR 745", img: dishKarahi, tag: "Chef's Pick" },
    { name: "Chicken Bombay Masala", price: "PKR 795", img: PIC.pak },
    { name: "Chicken Hara Masala", price: "PKR 775", img: PIC.pak },
    { name: "Chicken Kabab Masala", price: "PKR 599", img: PIC.pak },
    { name: "Chicken Tawa Qeema", price: "PKR 669", img: PIC.pak },
    { name: "Chicken Do Pyaza", price: "PKR 669", img: PIC.pak },
    { name: "Chicken Jalfrezi", price: "PKR 499", img: PIC.pak },
    { name: "Chicken Ginger", price: "PKR 499", img: PIC.pak },
    { name: "Mix Vegetable", price: "PKR 299", img: PIC.pak },
    { name: "Dal Makhni", price: "PKR 299", img: PIC.pak },
  ]},
  { id: "mutton", label: "Mutton Lovers", items: [
    { name: "Mutton Karahi", price: "PKR 1,395", img: dishMutton, tag: "Chef's Pick" },
    { name: "Mutton Handi", price: "PKR 1,395", img: dishMutton },
    { name: "Mutton Mughlai Handi", price: "PKR 1,395", img: dishMutton },
    { name: "Mutton Achari Handi", price: "PKR 1,395", img: dishMutton },
    { name: "Mutton Makhni Handi", price: "PKR 1,395", img: dishMutton },
    { name: "Mutton Green Chilli Lemon", price: "PKR 1,395", img: dishMutton, tag: "Spicy" },
    { name: "Brain Masala", price: "PKR 649", img: dishMutton },
    { name: "Mutton Kabab Masala", price: "PKR 649", img: dishMutton },
  ]},
  { id: "bbq", label: "BBQ & Grill", items: [
    { name: "Couple Platter (Chicken Kabab, Beef Kabab, Chicken Boti, Malai Boti, Kalmi Tikka, Fish Tikka with Rice)", price: "PKR 1,199", img: dishBbq, tag: "Chef's Pick" },
    { name: "Family Platter (with Rice, larger portions)", price: "PKR 1,999", img: dishBbq, tag: "Chef's Pick" },
    { name: "Special Kalmi Tikka (5 pcs)", price: "PKR 499", img: PIC.bbq },
    { name: "Fish Tikka (10 pcs)", price: "PKR 849", img: PIC.bbq },
    { name: "Chicken Afghani Boti (16 pcs)", price: "PKR 499", img: PIC.bbq },
    { name: "Shish Tawook Boti (16 pcs)", price: "PKR 499", img: PIC.bbq },
    { name: "Chicken Herb Boti (16 pcs)", price: "PKR 499", img: PIC.bbq },
    { name: "Chicken Malai Boti (16 pcs)", price: "PKR 499", img: PIC.bbq, tag: "Bestseller" },
    { name: "Chicken Lahori Boti (16 pcs)", price: "PKR 429", img: PIC.bbq },
    { name: "Turkish Boti (16 pcs)", price: "PKR 499", img: PIC.bbq },
    { name: "Chicken Kasturi Boti (16 pcs)", price: "PKR 499", img: PIC.bbq },
    { name: "Chicken Tikka", price: "PKR 199", img: PIC.bbq },
    { name: "Mutton Chops (6 pcs)", price: "PKR 995", img: PIC.bbq },
    { name: "Mutton Kabab (6 pcs)", price: "PKR 549", img: PIC.bbq },
    { name: "Chicken Reshmi Kabab (6 pcs)", price: "PKR 499", img: PIC.bbq },
    { name: "Chicken Kasturi Kabab (6 pcs)", price: "PKR 499", img: PIC.bbq },
    { name: "Chicken Kabab (6 pcs)", price: "PKR 449", img: PIC.bbq, tag: "Bestseller" },
    { name: "Beef Seekh Kabab (6 pcs)", price: "PKR 399", img: PIC.bbq },
  ]},
  { id: "tandoor", label: "Tandoor", items: [
    { name: "Cheese Naan", price: "PKR 149", img: PIC.naan },
    { name: "Chicken Naan", price: "PKR 149", img: PIC.naan },
    { name: "Garlic Naan", price: "PKR 49", img: PIC.naan },
    { name: "Kalonji Naan", price: "PKR 49", img: PIC.naan },
    { name: "Hara Spicy Naan", price: "PKR 49", img: PIC.naan },
    { name: "Roghni Naan", price: "PKR 35", img: PIC.naan },
    { name: "Tandoori Paratha", price: "PKR 49", img: PIC.naan },
    { name: "Achari Paratha", price: "PKR 49", img: PIC.naan },
    { name: "Tandoori Roti (per piece)", price: "PKR 39", img: PIC.naan },
  ]},
  { id: "beverages", label: "Beverages", items: [
    { name: "Piña Colada", price: "PKR 169", img: PIC.bev },
    { name: "Blue Lagoon", price: "PKR 169", img: PIC.bev },
    { name: "Mint Margarita", price: "PKR 139", img: dishMintMargarita },
    { name: "My Thai", price: "PKR 169", img: PIC.bev },
    { name: "Cold Coffee", price: "PKR 179", img: dishColdCoffee, tag: "Bestseller" },
    { name: "Fresh Juice (Seasonal)", price: "PKR 169", img: PIC.bev },
    { name: "Soft Drink", price: "PKR 39", img: PIC.bev },
    { name: "Diet Drink", price: "PKR 89", img: PIC.bev },
    { name: "Mineral Water (Large)", price: "PKR 79", img: PIC.bev },
  ]},
  { id: "salads", label: "Salads", items: [
    { name: "Italian Salad", price: "PKR 259", img: PIC.salad },
    { name: "World Food Salad", price: "PKR 249", img: PIC.salad },
    { name: "Russian Salad", price: "PKR 199", img: PIC.salad },
    { name: "Fruit Salad", price: "PKR 199", img: PIC.salad },
    { name: "Chicken Pineapple Salad", price: "PKR 199", img: PIC.salad },
    { name: "Fresh Green Salad", price: "PKR 69", img: PIC.salad },
    { name: "Kachumber Salad", price: "PKR 89", img: PIC.salad },
    { name: "Plain Raita", price: "PKR 59", img: PIC.salad },
    { name: "Mint Raita", price: "PKR 59", img: PIC.salad },
  ]},
  { id: "desserts", label: "Desserts & Hot Drinks", items: [
    { name: "Bread Pudding", price: "PKR 99", img: PIC.dessert },
    { name: "Chocolate Brownie with Cream", price: "PKR 209", img: dishBrownie, tag: "Bestseller" },
    { name: "Tutti Frutti", price: "PKR 169", img: PIC.dessert },
    { name: "Flavored Ice Cream", price: "PKR 109", img: PIC.dessert },
    { name: "Arabic Basbousa", price: "PKR 99", img: PIC.dessert },
    { name: "Cappuccino", price: "PKR 99", img: PIC.dessert },
    { name: "Mix Tea", price: "PKR 69", img: PIC.dessert },
    { name: "Green Tea", price: "PKR 59", img: PIC.dessert },
  ]},
];

const popularPicks = [
  { name: "Tarragon Steak", price: "PKR 649", img: dishTarragon },
  { name: "Chicken Karahi", price: "PKR 745", img: dishKarahi },
  { name: "Couple Platter", price: "PKR 1,199", img: dishBbq },
  { name: "Chicken Malai Boti", price: "PKR 499", img: dishBbq },
  { name: "Chicken Manchurian", price: "PKR 499", img: dishChinese },
  { name: "Chocolate Brownie", price: "PKR 209", img: dishBrownie },
];

const tagStyle = (tag: Tag) => {
  switch (tag) {
    case "Bestseller": return "bg-destructive text-destructive-foreground";
    case "Chef's Pick": return "bg-gold text-gold-foreground";
    case "Spicy": return "bg-primary text-primary-foreground";
  }
};

const priceToNumber = (p: string) => {
  const n = parseInt(p.replace(/[^\d]/g, ""), 10);
  return Number.isFinite(n) ? n : 0;
};
const formatPKR = (n: number) => `PKR ${n.toLocaleString("en-PK")}`;

type CartItem = { name: string; price: number; qty: number };

function MenuPage() {
  usePageTitle("Our Menu — Quilim Restaurant Faisalabad");
  const [active, setActive] = useState(sections[0].id);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isProgrammaticScroll = useRef(false);
  const programmaticTimeout = useRef<number | null>(null);
  const activeBtnRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sections;
    return sections
      .map((s) => ({ ...s, items: s.items.filter((it) => it.name.toLowerCase().includes(q)) }))
      .filter((s) => s.items.length > 0);
  }, [query]);

  // ScrollSpy — IntersectionObserver tracks which section is currently in view
  useEffect(() => {
    const ids = filteredSections.map((s) => s.id);
    const els = ids
      .map((id) => sectionRefs.current[id])
      .filter((el): el is HTMLDivElement => el !== null && el !== undefined);

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;
        // Find the topmost section that is intersecting near the top of viewport
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          const id = (visible[0].target as HTMLElement).id;
          if (id) setActive(id);
        }
      },
      {
        // Trigger when section enters the band 180px from top to 60% from top
        rootMargin: "-180px 0px -50% 0px",
        threshold: 0,
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredSections]);

  // Scroll active sidebar / pill into view
  useEffect(() => {
    const btn = activeBtnRefs.current[active];
    if (btn) {
      btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [active]);

  const scrollToSection = (id: string) => {
    setActive(id);
    isProgrammaticScroll.current = true;
    if (programmaticTimeout.current) window.clearTimeout(programmaticTimeout.current);
    const el = sectionRefs.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 160;
      window.scrollTo({ top, behavior: "smooth" });
    }
    programmaticTimeout.current = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 800);
  };

  // Cart helpers
  const addItem = (name: string, price: string) => {
    setCart((c) => {
      const existing = c[name];
      return {
        ...c,
        [name]: { name, price: priceToNumber(price), qty: existing ? existing.qty + 1 : 1 },
      };
    });
  };
  const decItem = (name: string) => {
    setCart((c) => {
      const existing = c[name];
      if (!existing) return c;
      if (existing.qty <= 1) {
        const { [name]: _removed, ...rest } = c;
        return rest;
      }
      return { ...c, [name]: { ...existing, qty: existing.qty - 1 } };
    });
  };
  const removeItem = (name: string) => {
    setCart((c) => {
      const { [name]: _removed, ...rest } = c;
      return rest;
    });
  };
  const clearCart = () => setCart({});

  const cartList = Object.values(cart);
  const itemCount = cartList.reduce((s, it) => s + it.qty, 0);
  const total = cartList.reduce((s, it) => s + it.qty * it.price, 0);

  const orderViaWhatsApp = () => {
    if (cartList.length === 0) return;
    const lines = cartList.map((it) => `• ${it.qty}× ${it.name} — ${formatPKR(it.qty * it.price)}`);
    const message = encodeURIComponent(
      `Hi Quilim, I'd like to place an order:\n\n${lines.join("\n")}\n\nSubtotal: ${formatPKR(total)}\n\nPlease confirm availability and delivery time. Thank you!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <Layout>
      <PageHero title="Our Menu" subtitle="Crafted with passion · Served with pride" />

      <section className="container mx-auto px-4 lg:px-8 py-10 md:py-16">
        {/* Search */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search dishes, categories..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>
        </div>

        {!query && (
          <div className="mb-12">
            <div className="flex items-baseline justify-between mb-5">
              <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold flex items-center gap-2">
                <Star className="h-5 w-5 fill-gold text-gold" /> Popular Picks
              </h2>
              <span className="text-xs text-muted-foreground hidden sm:inline">Tap + to add to your order</span>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 snap-x scrollbar-hide [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
              {popularPicks.map((p) => {
                const inCart = cart[p.name];
                return (
                  <Card key={p.name} className="shrink-0 w-60 sm:w-72 overflow-hidden bg-card hover-lift snap-start p-0 flex flex-col">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-serif text-lg text-foreground font-semibold">{p.name}</h3>
                      <p className="text-primary font-bold mt-1 font-serif">{p.price}</p>
                      <Button
                        onClick={() => addItem(p.name, p.price)}
                        size="sm"
                        className={`mt-3 ${inCart ? "bg-gold text-gold-foreground hover:bg-gold/90" : "bg-primary hover:bg-primary/90"}`}
                      >
                        <Plus className="h-4 w-4 mr-1" /> {inCart ? `Added (${inCart.qty})` : "Add to order"}
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Mobile sticky pills */}
        <div className="lg:hidden sticky top-20 -mx-4 px-4 py-3 bg-background/95 backdrop-blur z-30 border-y border-border mb-6">
          <div className="flex gap-2 overflow-x-auto -mx-4 px-4 snap-x scroll-smooth scrollbar-hide [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
            {sections.map((s) => (
              <button
                key={s.id}
                ref={(el) => { activeBtnRefs.current[s.id] = el; }}
                onClick={() => scrollToSection(s.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all border whitespace-nowrap snap-start ${
                  active === s.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-12">
          {/* Desktop sticky sidebar — always within viewport, scrolls inside */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 -mr-2">
              <div className="flex flex-col gap-1.5">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    ref={(el) => { activeBtnRefs.current[s.id] = el; }}
                    onClick={() => scrollToSection(s.id)}
                    className={`text-left px-4 py-3 rounded-md text-sm font-medium transition-all border ${
                      active === s.id
                        ? "bg-primary text-primary-foreground border-primary shadow-card"
                        : "bg-card text-foreground border-border hover:border-gold"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-16 min-w-0">
            {filteredSections.length === 0 && (
              <p className="text-center text-muted-foreground py-20">No dishes match "{query}". Try another search.</p>
            )}
            {filteredSections.map((s) => (
              <div
                key={s.id}
                id={s.id}
                ref={(el) => { sectionRefs.current[s.id] = el; }}
                className="scroll-mt-40"
              >
                <div className="flex items-baseline gap-4 mb-7">
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary font-bold">{s.label}</h2>
                  <div className="flex-1 h-px bg-gold/40" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  {s.items.map((item) => {
                    const inCart = cart[item.name];
                    return (
                      <Card
                        key={item.name}
                        onClick={() => addItem(item.name, item.price)}
                        className={`flex gap-4 p-4 hover-lift bg-card overflow-hidden cursor-pointer transition-all select-none ${
                          inCart
                            ? "border-2 border-gold ring-2 ring-gold/20"
                            : "border border-border/60 hover:border-gold/50"
                        }`}
                      >
                        <div className="relative shrink-0">
                          <img
                            src={item.img}
                            alt={item.name}
                            loading="lazy"
                            className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-md"
                          />
                          {item.tag && (
                            <Badge className={`absolute -top-2 -left-2 ${tagStyle(item.tag)} text-[9px] uppercase tracking-wider px-2 py-0.5 shadow-card flex items-center gap-1`}>
                              {item.tag === "Chef's Pick" && <ChefHat className="h-2.5 w-2.5" />}
                              {item.tag === "Spicy" && <Flame className="h-2.5 w-2.5" />}
                              {item.tag}
                            </Badge>
                          )}
                          {inCart && (
                            <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-gold text-gold-foreground text-xs font-bold grid place-items-center shadow-card">
                              {inCart.qty}
                            </span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col">
                          <h3 className="font-serif text-base sm:text-lg text-foreground font-semibold leading-tight">{item.name}</h3>
                          <div className="flex-1" />
                          <div className="mt-3 flex items-center justify-between gap-2">
                            <p className="text-primary font-bold text-base sm:text-lg font-serif">{item.price}</p>
                            {inCart ? (
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={(e) => { e.stopPropagation(); decItem(item.name); }}
                                  className="w-8 h-8 rounded-full bg-secondary text-foreground grid place-items-center hover:bg-secondary/70"
                                  aria-label="Decrease"
                                >
                                  <Minus className="h-3.5 w-3.5" />
                                </button>
                                <button
                                  onClick={(e) => { e.stopPropagation(); addItem(item.name, item.price); }}
                                  className="w-8 h-8 rounded-full bg-primary text-primary-foreground grid place-items-center hover:bg-primary/90"
                                  aria-label="Increase"
                                >
                                  <Plus className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={(e) => { e.stopPropagation(); addItem(item.name, item.price); }}
                                className="w-8 h-8 rounded-full bg-primary text-primary-foreground grid place-items-center hover:bg-primary/90"
                                aria-label="Add to order"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-secondary/40 rounded-lg p-8 md:p-10">
          <h3 className="font-serif text-2xl md:text-3xl text-primary font-bold">Ready to Taste It All?</h3>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Reserve your table at Quilim Faisalabad today — or call us to order.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild className="bg-primary hover:bg-primary/90 h-12 px-8 min-h-[48px]">
              <Link to="/reservations">Reserve a Table</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 px-8 min-h-[48px]">
              <a href="tel:+924118540373">Call +92 41 8540373</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Floating / sticky View Order button — always visible on mobile when cart has items */}
      {itemCount > 0 && !cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          aria-label={`View order, ${itemCount} item${itemCount !== 1 ? "s" : ""}, total ${formatPKR(total)}`}
          className="fixed right-4 sm:right-6 bottom-24 sm:bottom-6 z-40 inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full pl-5 pr-6 h-14 shadow-elegant ring-4 ring-primary/20 hover:scale-105 transition-transform animate-fade-in-up"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0)" }}
        >
          <span className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-2 -right-3 w-5 h-5 rounded-full bg-gold text-gold-foreground text-[10px] font-bold grid place-items-center">
              {itemCount}
            </span>
          </span>
          <span className="font-medium text-sm whitespace-nowrap">View Order · {formatPKR(total)}</span>
        </button>
      )}

      {/* Cart drawer */}
      <div
        onClick={() => setCartOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${cartOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-background z-50 shadow-elegant flex flex-col transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div>
            <h3 className="font-serif text-2xl text-primary font-bold">Your Order</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{itemCount} item{itemCount !== 1 && "s"} selected</p>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="w-10 h-10 rounded-full grid place-items-center hover:bg-accent transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {cartList.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <ShoppingBag className="h-12 w-12 mx-auto mb-4 opacity-30" />
              <p>Your order is empty.</p>
              <p className="text-xs mt-1">Tap any dish to add it.</p>
            </div>
          ) : (
            cartList.map((it) => (
              <div key={it.name} className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border/60">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground leading-tight">{it.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{formatPKR(it.price)} each</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-1">
                    <button onClick={() => decItem(it.name)} className="w-7 h-7 rounded-full bg-secondary grid place-items-center hover:bg-secondary/70" aria-label="Decrease">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-6 text-center text-sm font-medium">{it.qty}</span>
                    <button onClick={() => addItem(it.name, formatPKR(it.price))} className="w-7 h-7 rounded-full bg-primary text-primary-foreground grid place-items-center hover:bg-primary/90" aria-label="Increase">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <p className="text-sm font-bold text-primary font-serif">{formatPKR(it.qty * it.price)}</p>
                </div>
                <button onClick={() => removeItem(it.name)} className="text-muted-foreground hover:text-destructive transition-colors p-1" aria-label="Remove">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {cartList.length > 0 && (
          <div className="border-t border-border p-5 space-y-3 bg-card">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="font-serif text-2xl font-bold text-primary">{formatPKR(total)}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Final pricing, taxes and delivery will be confirmed by our team on WhatsApp.
            </p>
            <Button
              onClick={orderViaWhatsApp}
              className="w-full h-12 bg-[#25D366] hover:bg-[#1ebe57] text-white font-medium text-base"
            >
              <MessageCircle className="mr-2 h-5 w-5" /> Send Order via WhatsApp
            </Button>
            <button
              onClick={clearCart}
              className="w-full text-xs text-muted-foreground hover:text-destructive transition-colors py-2"
            >
              Clear order
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default MenuPage;
