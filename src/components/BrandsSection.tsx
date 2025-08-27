import { Shield, Award, Zap, Battery } from "lucide-react";
import { Button } from "./ui/button";

const brands = [
  {
    name: "EXIDE",
    description: "Trusted power solutions for over 70 years",
    features: ["Long Life Technology", "High Cranking Power", "Wide Temperature Range"],
    warranty: "48 Months",
    color: "from-red-500/20 to-red-600/20"
  },
  {
    name: "AMARON",
    description: "Advanced battery technology with superior performance",
    features: ["Zero Maintenance", "Vibration Resistant", "Fast Charging"],
    warranty: "42 Months", 
    color: "from-primary/20 to-primary-glow/20"
  },
  {
    name: "MAC",
    description: "Premium quality batteries for all vehicle types",
    features: ["Deep Cycle Technology", "Corrosion Resistant", "High Reserve Capacity"],
    warranty: "36 Months",
    color: "from-blue-500/20 to-blue-600/20"
  }
];

const BrandsSection = () => {
  return (
    <section id="brands" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display font-black text-4xl md:text-5xl mb-6">
            <span className="text-foreground">Trusted</span>{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">Brands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Authorized dealer for India's leading battery manufacturers
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {brands.map((brand, index) => (
            <div 
              key={brand.name}
              className="group relative bg-card border border-border rounded-xl p-8 hover:shadow-card hover:border-primary/30 transition-all duration-300 animate-fade-up overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-50 group-hover:opacity-70 transition-opacity`} />
              
              <div className="relative z-10">
                {/* Brand Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Battery className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-foreground mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {brand.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {brand.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                        <Zap className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Warranty Badge */}
                <div className="flex items-center justify-between bg-secondary/30 p-3 rounded-lg mb-6">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Warranty</span>
                  </div>
                  <span className="font-display font-bold text-primary">{brand.warranty}</span>
                </div>

                {/* CTA */}
                {brand.name === 'EXIDE' ? (
                  <a 
                    href="https://www.exideindustries.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  >
                    View {brand.name} Batteries
                  </a>
                ) : brand.name === 'AMARON' ? (
                  <a 
                    href="https://www.amaron.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  >
                    View {brand.name} Batteries
                  </a>
                ) : (
                  <a 
                    href="https://maps.app.goo.gl/G7Q15yTbnQEsTpfT6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  >
                    View {brand.name} Batteries
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Award className="w-8 h-8 text-primary mx-auto" />
              <h4 className="font-display font-bold text-lg text-foreground">Authorized Dealer</h4>
              <p className="text-sm text-muted-foreground">Official warranty and genuine products</p>
            </div>
            <div className="space-y-2">
              <Shield className="w-8 h-8 text-primary mx-auto" />
              <h4 className="font-display font-bold text-lg text-foreground">Warranty Support</h4>
              <p className="text-sm text-muted-foreground">Complete warranty registration and claims</p>
            </div>
            <div className="space-y-2">
              <Battery className="w-8 h-8 text-primary mx-auto animate-charge" />
              <h4 className="font-display font-bold text-lg text-foreground">Expert Installation</h4>
              <p className="text-sm text-muted-foreground">Professional fitting and testing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;