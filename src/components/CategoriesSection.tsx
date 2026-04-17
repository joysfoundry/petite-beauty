import skincare from "@/assets/category-skincare.jpg";
import makeup from "@/assets/category-makeup.jpg";
import hair from "@/assets/category-hair.jpg";
import travel from "@/assets/category-travel.jpg";
import luxury from "@/assets/category-luxury.jpg";
import fragrance from "@/assets/category-fragrance.jpg";
import deodorant from "@/assets/category-deodorant.jpg";
import tools from "@/assets/category-tools.jpg";
import { trackClick } from "@/lib/track";

const categories = [
  { name: "Skincare", image: skincare, count: "10+ minis" },
  { name: "Makeup", image: makeup, count: "5+ minis" },
  { name: "Hair & Body", image: hair, count: "5+ minis" },
  { name: "Fragrance", image: fragrance, count: "Mini scents" },
  { name: "Deodorant", image: deodorant, count: "Travel-size" },
  { name: "Beauty Tools", image: tools, count: "Mini brushes & more" },
  { name: "Travel Kits", image: travel, count: "Curated sets" },
  { name: "Luxury Minis", image: luxury, count: "Premium picks" },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Explore
          </p>
          <h2 className="text-3xl md:text-4xl tracking-tight">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              onClick={() => trackClick("category_click", cat.name)}
              className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                width={640}
                height={640}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-primary-foreground text-lg">{cat.name}</h3>
                <p className="text-primary-foreground/70 text-xs font-sans">{cat.count}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
