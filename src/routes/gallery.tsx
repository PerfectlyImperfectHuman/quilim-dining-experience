import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

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
import dishAppetizer from "@/assets/dish-appetizer.jpg";
import dishRice from "@/assets/dish-rice.jpg";
import about from "@/assets/about.jpg";
import hero from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";
import family from "@/assets/ambiance-family.jpg";
import banquet from "@/assets/ambiance-banquet.jpg";

type Cat = "Food" | "Ambiance" | "BBQ" | "Desserts";
type Img = { src: string; cat: Cat; alt: string; tall?: boolean };

const images: Img[] = [
  { src: dishKarahi, cat: "Food", alt: "Sizzling Chicken Karahi", tall: true },
  { src: interior, cat: "Ambiance", alt: "Grand candlelit dining hall" },
  { src: dishBbq, cat: "BBQ", alt: "Mixed BBQ Platter" },
  { src: dishTarragon, cat: "Food", alt: "Tarragon chicken steak" },
  { src: family, cat: "Ambiance", alt: "Families dining at Quilim", tall: true },
  { src: dishBrownie, cat: "Desserts", alt: "Chocolate brownie with ice cream" },
  { src: dishMutton, cat: "Food", alt: "Mutton karahi with naan" },
  { src: banquet, cat: "Ambiance", alt: "Private banquet hall" },
  { src: dishColdCoffee, cat: "Desserts", alt: "Cold coffee" },
  { src: dishParmesan, cat: "Food", alt: "Parmesan Chicken", tall: true },
  { src: dishSteak, cat: "Food", alt: "Black pepper beef steak" },
  { src: dishNaan, cat: "Food", alt: "Fresh tandoori naan" },
  { src: dishMintMargarita, cat: "Desserts", alt: "Mint margarita mocktail" },
  { src: dishChinese, cat: "Food", alt: "Chicken Manchurian" },
  { src: dishAppetizer, cat: "Food", alt: "Crispy appetizer platter" },
  { src: dishSwiss, cat: "Food", alt: "Swiss Nipolo Chicken" },
  { src: dishRice, cat: "Food", alt: "Aromatic biryani with raita" },
  { src: dishPlatter, cat: "Food", alt: "Quilim Lunch Platter" },
  { src: hero, cat: "Ambiance", alt: "Warm dining room glow", tall: true },
  { src: about, cat: "Ambiance", alt: "Elegant table setting" },
];

function GalleryPage() {
  usePageTitle("Gallery — Quilim Restaurant Faisalabad");
  const [filter, setFilter] = useState<"All" | Cat>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter((i) => i.cat === filter);

  const next = () => setOpenIdx((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () => setOpenIdx((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIdx, filtered.length]);

  return (
    <Layout>
      <PageHero title="A Feast for the Eyes" subtitle="Moments captured at Quilim" />

      <section className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(["All", "Food", "Ambiance", "BBQ", "Desserts"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border min-h-[44px] ${
                filter === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border hover:border-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry-style grid using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {filtered.map((img, i) => (
            <button
              key={`${img.src}-${i}`}
              onClick={() => setOpenIdx(i)}
              className="group relative overflow-hidden rounded-lg shadow-card hover-lift mb-4 break-inside-avoid block w-full"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  img.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors grid place-items-end p-4">
                <span className="opacity-0 group-hover:opacity-100 text-white font-serif text-base transition-opacity text-left w-full">{img.alt}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {openIdx !== null && (
        <div
          onClick={() => setOpenIdx(null)}
          className="fixed inset-0 z-[100] bg-black/95 grid place-items-center p-4 animate-fade-in-up"
        >
          <button
            onClick={(e) => { e.stopPropagation(); setOpenIdx(null); }}
            className="absolute top-6 right-6 text-white p-2 hover:text-gold transition-colors"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <img
            src={filtered[openIdx].src}
            alt={filtered[openIdx].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] object-contain rounded-lg"
          />
          <p className="absolute bottom-6 inset-x-0 text-center text-white/85 text-sm">
            {filtered[openIdx].alt}
          </p>
        </div>
      )}
    </Layout>
  );
}

export default GalleryPage;
