import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="font-serif text-xl tracking-tight">
          Petite Beauty
        </a>

        <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide">
          <a href="#categories" className="text-muted-foreground hover:text-foreground transition-colors">Shop</a>
          <a href="#bundles" className="text-muted-foreground hover:text-foreground transition-colors">Bundles</a>
          <a href="#build" className="text-muted-foreground hover:text-foreground transition-colors">Build Your Bag</a>
          <a href="#brands" className="text-muted-foreground hover:text-foreground transition-colors">Brands</a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-3 font-sans text-sm animate-fade-in">
          <a href="#categories" className="block text-muted-foreground hover:text-foreground">Shop</a>
          <a href="#bundles" className="block text-muted-foreground hover:text-foreground">Bundles</a>
          <a href="#build" className="block text-muted-foreground hover:text-foreground">Build Your Bag</a>
          <a href="#brands" className="block text-muted-foreground hover:text-foreground">Brands</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
