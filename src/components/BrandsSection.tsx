const brands = [
  "The Ordinary", "COSRX", "Laneige", "Drunk Elephant", "Glow Recipe",
  "Rare Beauty", "Fenty Beauty", "Benefit", "Olaplex", "Sol de Janeiro", "Supergoop",
];

const BrandsSection = () => {
  return (
    <section id="brands" className="py-16 border-y border-border">
      <div className="container mx-auto px-6">
        <p className="text-center font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
          Brands We Love
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-serif text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
