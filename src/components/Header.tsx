import { Phone, MessageSquare, Zap, Battery } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-card border-b border-border/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <div className="relative">
            <Battery className="w-8 h-8 text-primary animate-charge" />
            <Zap className="w-4 h-4 text-accent absolute -top-1 -right-1" />
          </div>
          <div>
            <h1 className="font-display font-black text-xl text-foreground">
              BHARAT TRADERS
            </h1>
            <p className="text-xs text-muted-foreground font-medium">
              Authorized Battery Dealer
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Home
          </a>
          <a href="#products" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Products
          </a>
          <a href="#services" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Services
          </a>
          <a href="#brands" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Brands
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex flex-col md:flex-row items-center gap-2  md:w-auto">
      <a href="tel:+919133939199" aria-label="Call 9133939199" className=" md:w-auto">
        <Button variant="hero" size="sm" className="w-full md:w-auto">
          <Phone className="w-4 h-4" />
          Call Now
        </Button>
      </a>
      <a href="https://wa.me/919133939199?text=Hi%20I%20need%20assistance" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp 9133939199" className="w-full md:w-auto">
        <Button variant="call" size="sm" className="w-full md:w-auto">
          <MessageSquare className="w-4 h-4" />
          WhatsApp
        </Button>
          </a>
       
        </div>
      </div>
    </header>
  );
};

export default Header;