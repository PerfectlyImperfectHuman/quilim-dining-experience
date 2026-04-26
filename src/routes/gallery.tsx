import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { X } from "lucide-react";
import dishParmesan from "@/assets/dish-parmesan.jpg";
import dishPlatter from "@/assets/dish-platter.jpg";
import dishSwiss from "@/assets/dish-swiss.jpg";
import about from "@/assets/about.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Quilim Restaurant" },
      { name: "description", content: "A visual feast — explore Quilim's signature dishes and elegant ambiance." },
    ],
  }),
  component: GalleryPage,
});

type Img = { src: string; cat: "Food" | "Ambiance"; alt: string };
const images: Img[] = [
  { src: dishParmesan, cat: "Food", alt: "Parmesan Chicken" },
  { src: hero, cat: "Ambiance", alt: "Restaurant interior" },
  { src: dishPlatter, cat: "Food", alt: "Lunch Platter" },
  { src: about, cat: "Ambiance", alt: "Dining room" },
  { src: dishSwiss, cat: "Food", alt: "Swiss chicken" },
  { src: dishParmesan, cat: "Food", alt: "Plated dish" },
  { src: hero, cat: "Ambiance", alt: "Warm lighting" },
  { src: dishPlatter, cat: "Food", alt: "Platter" },
  { src: about, cat: "Ambiance", alt: "Tables set" },
  { src: dishSwiss, cat: "Food", alt: "Continental" },
  { src: dishParmesan, cat: "Food", alt: "Signature dish" },
  { src: hero, cat: "Ambiance", alt: "Chandeliers" },
];

function GalleryPage() {
  const [filter, setFilter] = useState<"All" | "Food" | "Ambiance">("All");
  const [open, setOpen] = useState<string | null>(null);
  const filtered = filter === "All" ? images : images.filter((i) => i.cat === filter);

  return (
    <Layout>
      <PageHero title="A Feast for the Eyes" subtitle="Moments captured at Quilim" />

      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="flex justify-center gap-2 mb-10">
          {(["All", "Food", "Ambiance"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                filter === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border hover:border-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((img, i) => (
            <button
              key={i}
              onClick={() => setOpen(img.src)}
              className="group relative overflow-hidden rounded-lg aspect-square shadow-card hover-lift"
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors grid place-items-center">
                <span className="opacity-0 group-hover:opacity-100 text-white font-serif text-lg transition-opacity">{img.alt}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] bg-black/90 grid place-items-center p-4 animate-fade-in-up"
        >
          <button className="absolute top-6 right-6 text-white p-2" aria-label="Close">
            <X className="h-8 w-8" />
          </button>
          <img src={open} alt="" className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg" />
        </div>
      )}
    </Layout>
  );
}
