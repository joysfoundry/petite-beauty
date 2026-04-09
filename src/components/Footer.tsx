const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="font-serif text-lg">Petite Beauty</h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Everything mini. One place.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">Shop</h4>
            <div className="space-y-2 text-sm font-sans">
              <a href="#" className="block text-foreground/70 hover:text-foreground transition-colors">Skincare</a>
              <a href="#" className="block text-foreground/70 hover:text-foreground transition-colors">Makeup</a>
              <a href="#" className="block text-foreground/70 hover:text-foreground transition-colors">Hair & Body</a>
              <a href="#" className="block text-foreground/70 hover:text-foreground transition-colors">Bundles</a>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">Company</h4>
            <div className="space-y-2 text-sm font-sans">
              <a href="#" className="block text-foreground/70 hover:text-foreground transition-colors">About</a>
              <a href="#" className="block text-foreground/70 hover:text-foreground transition-colors">Brand Partners</a>
              <a href="#" className="block text-foreground/70 hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">Follow Us</h4>
            <div className="space-y-2 text-sm font-sans">
              <a href="#" className="block text-foreground/70 hover:text-foreground transition-colors">TikTok</a>
              <a href="#" className="block text-foreground/70 hover:text-foreground transition-colors">Instagram</a>
              <a href="#" className="block text-foreground/70 hover:text-foreground transition-colors">Pinterest</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-sans">
            © 2026 Petite Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
