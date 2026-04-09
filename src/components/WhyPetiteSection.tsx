import { Plane, FlaskConical, Sparkles } from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "Travel-Ready",
    description: "TSA-approved sizes that fit perfectly in your carry-on.",
  },
  {
    icon: FlaskConical,
    title: "Try Before Committing",
    description: "Test luxury products without the full-size price tag.",
  },
  {
    icon: Sparkles,
    title: "Curated from Top Brands",
    description: "Drunk Elephant, Rare Beauty, Laneige, and more.",
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
            Luxury discovery—not cheap samples
          </h2>
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
