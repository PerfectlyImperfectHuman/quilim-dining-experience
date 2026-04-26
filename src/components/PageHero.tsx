export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-primary text-primary-foreground py-20 md:py-28 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,var(--gold),transparent_50%)]" />
      <div className="container mx-auto px-4 relative animate-fade-in-up">
        <div className="inline-block mb-3">
          <span className="text-gold text-xs uppercase tracking-[0.3em]">Quilim</span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-bold">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">{subtitle}</p>
        )}
        <div className="mx-auto mt-6 w-20 h-px bg-gold" />
      </div>
    </section>
  );
}
