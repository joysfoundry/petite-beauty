import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-flatlay.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-up">
          <div className="space-y-4">
            <p className="font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Discover · Try · Love
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
              Try Before
              <br />
              You Buy
              <br />
              <span className="text-rose italic">Beauty</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md font-sans leading-relaxed">
              Discover mini and travel-size beauty products from top brands—all in one place.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="px-10 py-6">
              Shop Minis
            </Button>
            <Button variant="hero-outline" size="lg" className="px-10 py-6">
              Build Your Mini Bag
            </Button>
          </div>
          <p className="text-xs text-muted-foreground font-sans tracking-wide">
            Stop searching 10 sites for minis. Everything mini, one place.
          </p>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-rose/10">
            <img
              src={heroImage}
              alt="Luxury mini beauty products in a pink velvet pouch"
              width={1280}
              height={720}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-card rounded-xl px-5 py-3 shadow-lg border border-border">
            <p className="font-serif text-sm">✨ Curated minis</p>
            <p className="text-xs text-muted-foreground font-sans">From $4.99</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
