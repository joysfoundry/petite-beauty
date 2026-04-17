import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const bundles = [
  {
    name: "Luxury Minis Starter Kit",
    brands: "Drunk Elephant · Glow Recipe · Laneige",
    hook: "Try $200 skincare… for under $40",
    price: "$38",
    originalPrice: "$95",
    tags: ["Best Seller", "Under $50"],
  },
  {
    name: "Glass Skin Kit",
    brands: "COSRX · Laneige · Hydrating Serum",
    hook: "K-beauty routine in minis",
    price: "$32",
    originalPrice: "$78",
    tags: ["Trending", "Under $50"],
  },
  {
    name: "Everyday Glow Routine",
    brands: "Cleanser · Moisturizer · SPF · Lip",
    hook: "Your full routine under TSA limits",
    price: "$29",
    originalPrice: "$65",
    tags: ["Under $50"],
  },
  {
    name: "Mini Makeup Bag",
    brands: "Benefit · Fenty · Rare Beauty",
    hook: "Full face in minis",
    price: "$35",
    originalPrice: "$82",
    tags: ["Best Seller"],
  },
  {
    name: "Travel Essentials Kit",
    brands: "Shampoo · Cleanser · Body Lotion · Deodorant · Mini Fragrance",
    hook: "Pack this and go—plane-ready in seconds",
    price: "$32",
    originalPrice: "$72",
    tags: ["Under $50"],
  },
];

const BundlesSection = () => {
  return (
    <section id="bundles" className="py-24 bg-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Curated for You
          </p>
          <h2 className="text-3xl md:text-4xl tracking-tight">
            Featured Bundles
          </h2>
          <p className="text-muted-foreground font-sans mt-3 max-w-md mx-auto">
            Expert-curated mini kits to discover your next holy grails.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bundles.map((bundle) => (
            <div
              key={bundle.name}
              className="bg-card rounded-xl border border-border p-6 space-y-4 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="flex gap-2 flex-wrap">
                {bundle.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={tag === "Best Seller" ? "default" : "secondary"}
                    className={
                      tag === "Best Seller"
                        ? "bg-rose text-rose-foreground border-0 font-sans text-[10px] tracking-wider uppercase"
                        : "bg-secondary text-secondary-foreground font-sans text-[10px] tracking-wider uppercase"
                    }
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex-1">
                <h3 className="text-xl">{bundle.name}</h3>
                <p className="text-xs text-muted-foreground font-sans mt-1">{bundle.brands}</p>
                <p className="text-sm text-foreground/80 font-sans mt-3 italic">"{bundle.hook}"</p>
              </div>
              <div className="flex items-end justify-between pt-2">
                <div>
                  <span className="text-2xl font-serif">{bundle.price}</span>
                  <span className="text-sm text-muted-foreground line-through ml-2 font-sans">
                    {bundle.originalPrice}
                  </span>
                </div>
                <Button variant="hero" size="sm" className="px-6">
                  Add to Bag
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BundlesSection;
