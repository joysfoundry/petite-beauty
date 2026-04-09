import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  { number: "01", label: "Pick your routine", desc: "Skincare, makeup, or both?" },
  { number: "02", label: "Choose your brands", desc: "From Drunk Elephant to COSRX" },
  { number: "03", label: "Get your mini bag", desc: "Delivered to your door" },
];

const BuildBagSection = () => {
  return (
    <section id="build" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Your Routine, Your Way
          </p>
          <h2 className="text-3xl md:text-5xl tracking-tight">
            Build Your <span className="text-rose italic">Mini Bag</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-lg mx-auto">
            Create your perfect routine in minis. Build your mini bag in 60 seconds.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {steps.map((step) => (
              <div key={step.number} className="space-y-3">
                <span className="text-4xl font-serif text-accent">{step.number}</span>
                <h3 className="text-lg">{step.label}</h3>
                <p className="text-sm text-muted-foreground font-sans">{step.desc}</p>
              </div>
            ))}
          </div>

          <Button variant="hero" size="lg" className="px-12 py-6 mt-8">
            Start Building
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BuildBagSection;
