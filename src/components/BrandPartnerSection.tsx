import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/components/WaitlistDialog";

const BrandPartnerSection = () => {
  const { open } = useWaitlist();
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-2xl text-center space-y-6">
        <p className="font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground">
          For Brands
        </p>
        <h2 className="text-2xl md:text-3xl tracking-tight">
          Are you a beauty brand?
        </h2>
        <p className="text-muted-foreground font-sans leading-relaxed">
          Partner with us to help customers discover your products through our curated mini marketplace.
          Reach thousands of beauty enthusiasts looking to try before they buy.
        </p>
        <Button
          variant="hero-outline"
          size="lg"
          className="px-10 py-6"
          onClick={() => open("brand_partner")}
        >
          Partner With Us
        </Button>
      </div>
    </section>
  );
};

export default BrandPartnerSection;
