import { Plane, FlaskConical, Sparkles } from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "Travel-Ready Minis",
    description: "TSA-friendly travel sizes that slip into a Le Chiquito or Nice Mini.",
  },
  {
    icon: FlaskConical,
    title: "Try Before Committing",
    description: "Sample Dior Lip Maximizer, YSL Libre, Charlotte Tilbury and more—no full-size risk.",
  },
  {
    icon: Sparkles,
    title: "Curated Pouch-ception",
    description: "Mini designer bags paired with curated kits from Rare Beauty, Glossier, Sol de Janeiro.",
  },
];

const WhyPetiteSection = () => {
  return (
    <section className="py-24 bg-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Why Petite Beauty
          </p>
          <h2 className="text-3xl md:text-4xl tracking-tight">
            Mini designer bags. Curated beauty minis.
          </h2>
          <p className="text-muted-foreground font-sans mt-3 max-w-xl mx-auto">
            Luxury discovery—not cheap samples. Think Jacquemus, Prada Re-Edition, and Louis Vuitton Nice Mini, paired with travel-size icons.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto">
                <feature.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg">{feature.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPetiteSection;
