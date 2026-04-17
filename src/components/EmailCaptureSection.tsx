import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/components/WaitlistDialog";

const EmailCaptureSection = () => {
  const { open } = useWaitlist();
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 max-w-xl text-center space-y-6">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/60">
          Launching Soon
        </p>
        <h2 className="text-3xl md:text-4xl tracking-tight">
          Get 10% Off Your First Mini Bundle
        </h2>
        <p className="font-sans text-primary-foreground/70 text-sm">
          Join the waitlist for early access to new kits, exclusive deals, and curated picks.
        </p>
        <Button
          variant="rose"
          size="lg"
          className="px-10"
          onClick={() => open("email_capture")}
        >
          Join the Waitlist
        </Button>
      </div>
    </section>
  );
};

export default EmailCaptureSection;
