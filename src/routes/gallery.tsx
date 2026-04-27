import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { X, ChevronLeft, ChevronRight, Play, Facebook, Instagram, ExternalLink } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";
import { FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/links";

import dishParmesan from "@/assets/dish-parmesan.jpg";
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

// Real Quilim photos
import realExterior from "@/assets/real-exterior.jpg";
import realChandelier from "@/assets/real-chandelier.jpg";
import realAppetizer from "@/assets/real-appetizer-platter.jpg";
import realFamily from "@/assets/real-family-dining.jpg";
import realBuffet1 from "@/assets/real-buffet-1.jpg";
import realBuffet2 from "@/assets/real-buffet-2.jpg";
import realBbqCollage from "@/assets/real-bbq-collage.jpg";
import realChafing from "@/assets/real-chafing.jpg";

type Cat = "All" | "Food" | "Ambiance" | "BBQ" | "Desserts" | "Videos";
type Media =
  | { type: "image"; src: string; cat: Exclude<Cat, "All" | "Videos">; alt: string; tall?: boolean }
  | { type: "video"; src: string; poster: string; cat: "Videos"; alt: string; tall?: boolean };

const media: Media[] = [
  // Real photos featured first
  { type: "image", src: realExterior, cat: "Ambiance", alt: "Quilim Restaurant exterior at dusk", tall: true },
  { type: "image", src: realChandelier, cat: "Ambiance", alt: "Grand crystal chandelier inside Quilim" },
  { type: "image", src: realAppetizer, cat: "Food", alt: "Signature appetizer platter at Quilim" },
  { type: "image", src: realFamily, cat: "Ambiance", alt: "Families dining together at Quilim", tall: true },
  { type: "image", src: realBuffet1, cat: "Food", alt: "Premium buffet spread at Quilim" },
  { type: "image", src: realBuffet2, cat: "Food", alt: "Live buffet display with fresh dishes" },
  { type: "image", src: realBbqCollage, cat: "BBQ", alt: "Mixed BBQ — kababs, tikka and roast", tall: true },
  { type: "image", src: realChafing, cat: "Food", alt: "Chafing dish line — buffet service" },

  // Sample videos (Pexels — replace with real Quilim videos when available)
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/3296882/3296882-uhd_2560_1440_30fps.mp4",
    poster: realChafing,
    cat: "Videos",
    alt: "A look inside our kitchen",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/3298179/3298179-hd_1920_1080_25fps.mp4",
    poster: realBbqCollage,
    cat: "Videos",
    alt: "BBQ grill in action",
    tall: true,
  },

  // Studio dish photography
  { type: "image", src: dishKarahi, cat: "Food", alt: "Sizzling Chicken Karahi" },
  { type: "image", src: dishBbq, cat: "BBQ", alt: "Mixed BBQ Platter" },
  { type: "image", src: dishTarragon, cat: "Food", alt: "Tarragon chicken steak" },
  { type: "image", src: dishBrownie, cat: "Desserts", alt: "Chocolate brownie with ice cream" },
  { type: "image", src: dishMutton, cat: "Food", alt: "Mutton karahi with naan" },
  { type: "image", src: dishColdCoffee, cat: "Desserts", alt: "Cold coffee" },
  { type: "image", src: dishParmesan, cat: "Food", alt: "Parmesan Chicken", tall: true },
  { type: "image", src: dishSteak, cat: "Food", alt: "Black pepper beef steak" },
  { type: "image", src: dishNaan, cat: "Food", alt: "Fresh tandoori naan" },
  { type: "image", src: dishMintMargarita, cat: "Desserts", alt: "Mint margarita mocktail" },
  { type: "image", src: dishChinese, cat: "Food", alt: "Chicken Manchurian" },
  { type: "image", src: dishAppetizer, cat: "Food", alt: "Crispy appetizer platter" },
  { type: "image", src: dishSwiss, cat: "Food", alt: "Swiss Nipolo Chicken" },
];

function GalleryPage() {
  usePageTitle("Gallery — Quilim Restaurant Faisalabad");
  const [filter, setFilter] = useState<Cat>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered = filter === "All" ? media : media.filter((m) => m.cat === filter);

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

  const current = openIdx !== null ? filtered[openIdx] : null;

  return (
    <Layout>
      <PageHero title="A Feast for the Eyes" subtitle="Moments captured at Quilim" />

      <section className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(["All", "Food", "Ambiance", "BBQ", "Desserts", "Videos"] as const).map((f) => (
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

        {/* Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {filtered.map((item, i) => (
            <button
              key={`${item.src}-${i}`}
              onClick={() => setOpenIdx(i)}
              className="group relative overflow-hidden rounded-lg shadow-card hover-lift mb-4 break-inside-avoid block w-full"
            >
              <img
                src={item.type === "video" ? item.poster : item.src}
                alt={item.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              />
              {item.type === "video" && (
                <div className="absolute inset-0 grid place-items-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/95 grid place-items-center shadow-elegant group-hover:scale-110 transition-transform">
                    <Play className="h-7 w-7 text-primary fill-primary ml-1" />
                  </div>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-serif text-sm">{item.alt}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Social CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-secondary/60 to-accent/40 rounded-xl p-8 md:p-10 border border-border/60">
          <h3 className="font-serif text-2xl md:text-3xl text-primary font-bold">More on social</h3>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Discover daily updates, behind-the-scenes moments, and new menu launches on our Facebook and Instagram.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 h-12 rounded-md bg-[#1877F2] hover:bg-[#1560c4] text-white font-medium transition-colors"
            >
              <Facebook className="h-5 w-5" /> Facebook <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 h-12 rounded-md bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white font-medium transition-opacity hover:opacity-90"
            >
              <Instagram className="h-5 w-5" /> Instagram <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>
          </div>
        </div>
      </section>

      {current && (
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
          {current.type === "video" ? (
            <div onClick={(e) => e.stopPropagation()} className="flex flex-col items-center gap-4 max-w-[92vw]">
              <video
                src={current.src}
                controls
                autoPlay
                playsInline
                className="max-h-[72vh] max-w-[92vw] rounded-lg bg-black"
              />
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 h-11 rounded-md bg-[#1877F2] hover:bg-[#1560c4] text-white text-sm font-medium transition-colors"
                >
                  <Facebook className="h-4 w-4" /> More on Facebook
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 h-11 rounded-md bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white text-sm font-medium transition-opacity hover:opacity-90"
                >
                  <Instagram className="h-4 w-4" /> More on Instagram
                </a>
              </div>
            </div>
          ) : (
            <img
              src={current.src}
              alt={current.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-[92vw] object-contain rounded-lg"
            />
          )}
          <p className="absolute bottom-6 inset-x-0 text-center text-white/85 text-sm pointer-events-none">
            {current.alt}
          </p>
        </div>
      )}
    </Layout>
  );
}

export default GalleryPage;
