import { 
  Zap, 
  Settings, 
  Shield, 
  Truck, 
  TestTube2, 
  Recycle,
  Clock,
  CheckCircle2
} from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Zap,
    title: "Emergency Jump Start",
    description: "24/7 on-site jump start service across Ongole",
    features: ["Quick Response", "Professional Equipment", "Safe Process"]
  },
  {
    icon: Settings,
    title: "Battery Installation",
    description: "Free professional installation with warranty",
    features: ["Expert Technicians", "Proper Disposal", "Quality Assurance"]
  },
  {
    icon: TestTube2,
    title: "Free Testing",
    description: "Complete battery health check and diagnostics",
    features: ["Digital Testing", "Detailed Report", "Recommendation"]
  },
  {
    icon: Recycle,
    title: "Old Battery Buyback",
    description: "Best prices for your old batteries",
    features: ["Instant Payment", "Eco-Friendly", "Fair Valuation"]
  },
  {
    icon: Shield,
    title: "Warranty Registration",
    description: "Complete warranty support and registration",
    features: ["Digital Records", "Easy Claims", "Extended Support"]
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description: "Battery delivery and installation at your doorstep",
    features: ["Same Day", "Free Delivery", "Installation Included"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display font-black text-4xl md:text-5xl mb-6">
            <span className="text-foreground">Our</span>{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete battery solutions with professional service and genuine parts
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-card hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-surface p-8 rounded-2xl border border-primary/20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-primary animate-charge" />
            <span className="font-display font-bold text-xl text-foreground">
              Need Immediate Service?
            </span>
          </div>
          <p className="text-muted-foreground mb-6">
            Our technicians are available 24/7 for emergency battery services
          </p>
          <Button variant="hero" size="xl">
            <Zap className="w-5 h-5" />
            Call Technician Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;