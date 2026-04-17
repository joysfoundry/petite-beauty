import { createContext, useCallback, useContext, useState, ReactNode } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const waitlistSchema = z.object({
  first_name: z.string().trim().min(1, "First name is required").max(100, "First name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
});

type WaitlistContextValue = {
  open: (source?: string) => void;
};

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export const useWaitlist = () => {
  const ctx = useContext(WaitlistContext);
  if (!ctx) throw new Error("useWaitlist must be used inside WaitlistProvider");
  return ctx;
};

export const WaitlistProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<string | undefined>();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const open = useCallback((src?: string) => {
    setSource(src);
    setSubmitted(false);
    setFirstName("");
    setEmail("");
    setIsOpen(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = waitlistSchema.safeParse({ first_name: firstName, email });
    if (!parsed.success) {
      toast({
        title: "Please check your details",
        description: parsed.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("waitlist").insert({
      first_name: parsed.data.first_name,
      email: parsed.data.email,
      source: source ?? null,
    });
    setSubmitting(false);

    if (error) {
      // Unique violation = already on the list — treat as success
      if (error.code === "23505") {
        setSubmitted(true);
        return;
      }
      console.warn("waitlist insert failed", error);
      toast({
        title: "Something went wrong",
        description: "We couldn't add you to the waitlist right now. Please try again later.",
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
  };

  return (
    <WaitlistContext.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          {submitted ? (
            <div className="text-center py-6 space-y-3 animate-fade-up">
              <p className="font-serif text-2xl">You're on the list ✨</p>
              <p className="font-sans text-sm text-muted-foreground">
                We'll email you the moment Petite Beauty launches.
              </p>
              <Button variant="hero" className="mt-4" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl tracking-tight">
                  We're not live yet — join the waitlist
                </DialogTitle>
                <DialogDescription className="font-sans">
                  Be the first to shop minis from your favorite brands. Early access + 10% off your first bundle.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                <div className="space-y-2">
                  <Label htmlFor="wl-first-name" className="font-sans text-xs tracking-wide">
                    First name
                  </Label>
                  <Input
                    id="wl-first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Ava"
                    maxLength={100}
                    required
                    className="font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wl-email" className="font-sans text-xs tracking-wide">
                    Email
                  </Label>
                  <Input
                    id="wl-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ava@example.com"
                    maxLength={255}
                    required
                    className="font-sans"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Joining…" : "Join the waitlist"}
                </Button>
                <p className="text-[10px] tracking-wide text-muted-foreground font-sans text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </WaitlistContext.Provider>
  );
};
