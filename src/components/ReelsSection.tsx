import { useEffect, useState } from "react";
import { Play, X, Instagram } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { trackClick } from "@/lib/track";

type Reel = {
  id: string;
  /** Full Instagram reel URL, e.g. https://www.instagram.com/the_little_beannn/reel/DWbkDY3kdZS/ */
  url: string;
  /** Short caption shown on the card */
  caption: string;
  /** Creator handle without @ */
  handle: string;
  /** Optional thumbnail image URL (defaults to a soft gradient cover) */
  thumbnail?: string;
  /** Tag line like "Travel bag", "Skincare minis" */
  tag?: string;
};

// 👇 Add or edit reels here. Paste any public Instagram reel URL.
const reels: Reel[] = [
  {
    id: "1",
    url: "https://www.instagram.com/the_little_beannn/reel/DWbkDY3kdZS/",
    caption: "Packing minis for a weekend getaway",
    handle: "the_little_beannn",
    tag: "Weekend bag",
  },
  {
    id: "2",
    url: "https://www.instagram.com/the_little_beannn/reel/DWbkDY3kdZS/",
    caption: "TSA-approved everyday essentials",
    handle: "the_little_beannn",
    tag: "Travel kit",
  },
  {
    id: "3",
    url: "https://www.instagram.com/the_little_beannn/reel/DWbkDY3kdZS/",
    caption: "Mini glow routine in one pouch",
    handle: "the_little_beannn",
    tag: "Skincare minis",
  },
  {
    id: "4",
    url: "https://www.instagram.com/the_little_beannn/reel/DWbkDY3kdZS/",
    caption: "Full face from a tiny bag",
    handle: "the_little_beannn",
    tag: "Makeup minis",
  },
];

/** Normalize any IG reel URL to its embed form */
const toEmbedUrl = (url: string) => {
  const clean = url.split("?")[0].replace(/\/$/, "");
  return `${clean}/embed/`;
};

const ReelsSection = () => {
  const [activeReel, setActiveReel] = useState<Reel | null>(null);

  // Load Instagram embed script when modal opens (for any future blockquote embeds)
  useEffect(() => {
    if (!activeReel) return;
    const id = "instagram-embed-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.async = true;
    s.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(s);
  }, [activeReel]);

  const openReel = (reel: Reel) => {
    trackClick("reel_open", reel.handle, { reel_id: reel.id, url: reel.url });
    setActiveReel(reel);
  };

  return (
    <section className="py-20 md:py-28 bg-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 border-rose/40 text-rose-foreground bg-rose/10">
            <Instagram className="w-3 h-3 mr-1.5" />
            As seen on Instagram
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Real bags, real minis
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            See how creators pack their favorite minis. Tap a reel to watch.
          </p>
        </div>

        {/* Horizontal scroller */}
        <div className="-mx-4 px-4 overflow-x-auto scrollbar-hide">
          <ul className="flex gap-4 md:gap-6 pb-4 snap-x snap-mandatory">
            {reels.map((reel) => (
              <li
                key={reel.id}
                className="snap-start shrink-0 w-[260px] md:w-[300px]"
              >
                <button
                  onClick={() => openReel(reel)}
                  className="group relative block w-full aspect-[9/16] rounded-2xl overflow-hidden bg-secondary shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  aria-label={`Play reel: ${reel.caption}`}
                >
                  {/* Thumbnail / fallback gradient */}
                  {reel.thumbnail ? (
                    <img
                      src={reel.thumbnail}
                      alt={reel.caption}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-rose/40 via-accent to-warm" />
                  )}

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />

                  {/* Play icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-background/90 backdrop-blur flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 text-foreground fill-foreground ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                    {reel.tag && (
                      <span className="inline-block text-[10px] uppercase tracking-wider font-medium text-background/90 bg-foreground/40 backdrop-blur px-2 py-1 rounded-full mb-2">
                        {reel.tag}
                      </span>
                    )}
                    <p className="text-background font-medium text-sm leading-snug line-clamp-2 mb-1">
                      {reel.caption}
                    </p>
                    <p className="text-background/75 text-xs flex items-center gap-1">
                      <Instagram className="w-3 h-3" />@{reel.handle}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Lightbox modal */}
      <Dialog open={!!activeReel} onOpenChange={(open) => !open && setActiveReel(null)}>
        <DialogContent className="max-w-[400px] p-0 overflow-hidden bg-foreground border-none">
          <DialogTitle className="sr-only">{activeReel?.caption ?? "Instagram Reel"}</DialogTitle>
          <DialogDescription className="sr-only">
            Instagram reel by @{activeReel?.handle}
          </DialogDescription>
          {activeReel && (
            <div className="relative w-full" style={{ aspectRatio: "9 / 16" }}>
              <iframe
                key={activeReel.id}
                src={toEmbedUrl(activeReel.url)}
                title={activeReel.caption}
                className="absolute inset-0 w-full h-full"
                frameBorder={0}
                scrolling="no"
                allow="autoplay; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
          <button
            onClick={() => setActiveReel(null)}
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-background/90 hover:bg-background flex items-center justify-center shadow-lg transition"
            aria-label="Close reel"
          >
            <X className="w-4 h-4 text-foreground" />
          </button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ReelsSection;
