import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Navigation,
  Zap
} from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display font-black text-4xl md:text-5xl mb-6">
            <span className="text-foreground">Visit Our</span>{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">Store</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Located in the heart of Ongole for your convenience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-up">
            {/* Store Info */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                BHART TRADERS
              </h3>
              
              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Opp. Throvagunta Autonagar,<br />
                    1st Line, Ongole,<br />
                    Prakasam District
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Operating Hours</h4>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
                    <p>Sunday: 9:00 AM - 6:00 PM</p>
                    <p className="text-primary font-semibold">24/7 Emergency Service</p>
                  </div>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <Navigation className="w-5 h-5" />
                Get Directions
              </Button>
            </div>

            {/* Services Highlight */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-primary animate-charge" />
                <h4 className="font-display font-bold text-lg text-foreground">
                  What We Offer
                </h4>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">All Battery Types</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">Jump Start Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">Free Installation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">Warranty Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">Home Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">Old Battery Buyback</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6 animate-fade-up animation-delay-200">
            {/* Phone Contacts */}
            <div className="grid gap-4">
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-semibold text-foreground">Imran</h4>
                    <p className="text-2xl font-display font-bold text-primary">91339 39199</p>
                  </div>
                  <Button variant="call" size="sm">
                    <Phone className="w-4 h-4" />
                    Call
                  </Button>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-semibold text-foreground">Inthyaz</h4>
                    <p className="text-2xl font-display font-bold text-primary">77298 44661</p>
                  </div>
                  <Button variant="call" size="sm">
                    <Phone className="w-4 h-4" />
                    Call
                  </Button>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-semibold text-foreground mb-1">Email Us</h4>
                  <p className="text-primary break-all">shaikimmu1839@gmail.com</p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-surface border border-primary/20 rounded-xl p-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-foreground mb-2">
                    Quick WhatsApp Support
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Get instant answers to your battery questions
                  </p>
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  <MessageSquare className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* Emergency */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-destructive animate-charge" />
                </div>
                <h4 className="font-display font-bold text-lg text-foreground mb-2">
                  Emergency Service
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Battery dead? We'll be there in 30 minutes
                </p>
                <Button variant="destructive" size="lg" className="w-full">
                  Emergency Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;