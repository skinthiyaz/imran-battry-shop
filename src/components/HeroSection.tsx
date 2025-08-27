import { Search, PhoneCall, MapPin, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import heroImage from "@/assets/hero-battery-shop.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit opacity-40"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Brand Badges */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-secondary/50 rounded-lg border border-primary/20">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs font-display font-bold text-foreground">EXIDE</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-secondary/50 rounded-lg border border-primary/20">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs font-display font-bold text-foreground">AMARON</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-secondary/50 rounded-lg border border-primary/20">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs font-display font-bold text-foreground">MAC</span>
              </div>
            </div>

            <div>
              <h1 className="font-display font-black text-4xl md:text-6xl leading-tight mb-6">
                <span className="text-foreground">POWER WHEN IT</span>
                <br />
                <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">MATTERS</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Authorized batteries and jump-start assistance across{" "}
                <span className="text-primary font-semibold">Ongole, Prakasam</span>
              </p>
            </div>


            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" aria-label="Emergency jump start">
                <PhoneCall className="w-5 h-5" />
                Emergency Jump Start
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" aria-label="Get help">
                <PhoneCall className="w-5 h-5" />
                Get Help
              </a>
              <a href="tel:+919133939199" className="inline-flex items-center gap-2 rounded-md bg-secondary/30 px-6 py-3 font-semibold text-foreground hover:bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" aria-label="Call technician now">
                <PhoneCall className="w-5 h-5" />
                Call Technician Now
              </a>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-8">
              <div className="bg-card/60 p-4 rounded-lg border border-border/50 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Imran</p>
                    <p className="text-lg font-display font-bold text-primary">91339 39199</p>
                  </div>
                </div>
              </div>
              <div className="bg-card/60 p-4 rounded-lg border border-border/50 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Inthyaz</p>
                    <p className="text-lg font-display font-bold text-primary">83319 38147</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 shadow-2xl">
              <img 
                src={heroImage} 
                alt="BHART TRADERS - Premium Battery Shop in Ongole" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-primary p-4 rounded-xl shadow-primary animate-pulse-power">
              <p className="text-primary-foreground font-display font-bold text-sm">24/7</p>
              <p className="text-primary-foreground/80 text-xs">Service</p>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-accent p-4 rounded-xl shadow-accent">
              <p className="text-accent-foreground font-display font-bold text-sm">100%</p>
              <p className="text-accent-foreground/80 text-xs">Genuine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;