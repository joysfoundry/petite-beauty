import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EmailCaptureSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 max-w-xl text-center space-y-6">
        <h2 className="text-3xl md:text-4xl tracking-tight">
          Get 10% Off Your First Mini Bundle
        </h2>
        <p className="font-sans text-primary-foreground/70 text-sm">
          Join our community of beauty discoverers. Early access to new kits, exclusive deals, and curated picks.
        </p>

        {submitted ? (
          <div className="py-4 animate-fade-up">
            <p className="font-serif text-lg">Welcome to Petite Beauty ✨</p>
            <p className="font-sans text-sm text-primary-foreground/70 mt-1">Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-sans"
            />
            <Button type="submit" variant="rose" size="lg" className="shrink-0 px-8">
              Get 10% Off
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailCaptureSection;
