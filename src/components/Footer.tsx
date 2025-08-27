import { 
  Battery, 
  Zap, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Shield,
  Award
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Battery className="w-8 h-8 text-primary animate-charge" />
                <Zap className="w-4 h-4 text-accent absolute -top-1 -right-1" />
              </div>
              <div>
                <h2 className="font-display font-black text-2xl text-foreground">
                  BHARAT TRADERS
                </h2>
                <p className="text-sm text-muted-foreground font-medium">
                  Authorized Battery Dealer
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted partner for all battery needs in Ongole, Prakasam District. 
              We provide genuine batteries from top brands with professional installation 
              and 24/7 emergency services.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">
                  Opp. Throvagunta Autonagar, 1st Line, Ongole, Prakasam Dist.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">shaikimmu1839@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-4">
              Quick Links
            </h3>
            <div className="space-y-3">
              {[
                { label: "Battery Finder", href: "#products" },
                { label: "Jump Start Service", href: "#services" },
                { label: "Our Brands", href: "#brands" },
                { label: "Installation", href: "#services" },
                { label: "Warranty", href: "#brands" },
                { label: "Contact Us", href: "#contact" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-4">
              Contact Numbers
            </h3>
            <div className="space-y-4">
              <div className="bg-secondary/30 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Imran</span>
                </div>
                <p className="text-lg font-display font-bold text-primary">91339 39199</p>
              </div>
              
              <div className="bg-secondary/30 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Inthyaz</span>
                </div>
                <p className="text-lg font-display font-bold text-primary">77298 44661</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center mb-8">
            <div className="flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Authorized Dealer</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Genuine Products</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-5 h-5 text-primary animate-charge" />
              <span className="text-sm font-medium text-foreground">24/7 Service</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 BHARAT TRADERS. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Serving Ongole with</span>
              <Battery className="w-4 h-4 text-primary mx-1" />
              <span>since 2020</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;