import { 
  Car, 
  Bike, 
  Truck, 
  Bus, 
  Tractor, 
  Home, 
  Zap,
  ArrowRight 
} from "lucide-react";

const categories = [
  {
    icon: Bike,
    title: "Two Wheelers",
    description: "Bikes, Scooters, Motorcycles",
    popular: ["Hero Honda", "Bajaj", "TVS", "Yamaha"]
  },
  {
    icon: Car,
    title: "Passenger Vehicles", 
    description: "Cars, Hatchbacks, Sedans, SUVs",
    popular: ["Maruti", "Hyundai", "Tata", "Mahindra"]
  },
  {
    icon: Truck,
    title: "Commercial Vehicles",
    description: "Trucks, Tempos, Light Commercial",
    popular: ["Ashok Leyland", "Tata", "Eicher", "Force"]
  },
  {
    icon: Bus,
    title: "Three Wheelers",
    description: "Auto Rickshaw, Tempo, Mini Truck",
    popular: ["Bajaj", "TVS", "Mahindra", "Piaggio"]
  },
  {
    icon: Tractor,
    title: "Farm Vehicles",
    description: "Tractors, Farm Equipment",
    popular: ["Mahindra", "Sonalika", "New Holland", "John Deere"]
  },
  {
    icon: Home,
    title: "Inverters & Home",
    description: "Home UPS, Solar, Inverters",
    popular: ["Luminous", "Microtek", "Sukam", "Exide"]
  },
  {
    icon: Zap,
    title: "E-Vehicles",
    description: "Electric Bikes, Cars, Rickshaws",
    popular: ["Ather", "TVS", "Bajaj", "Mahindra"]
  },
  {
    icon: Car,
    title: "Other Applications",
    description: "Special Purpose, Industrial",
    popular: ["Gensets", "Marine", "Solar", "Industrial"]
  }
];

const VehicleCategorySection = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display font-black text-4xl md:text-5xl mb-6">
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">Batteries</span>{" "}
            <span className="text-foreground">for Every Need</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find the perfect battery for your vehicle type with our comprehensive range
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.title}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-card hover:border-primary/30 hover:bg-card/80 transition-all duration-300 cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {category.description}
              </p>
              
              {/* Popular Brands */}
              <div className="space-y-1 mb-4">
                <p className="text-xs font-medium text-foreground/60 uppercase tracking-wide">
                  Popular Brands
                </p>
                <div className="flex flex-wrap gap-1">
                  {category.popular.slice(0, 3).map((brand, i) => (
                    <span 
                      key={brand} 
                      className="text-xs px-2 py-1 bg-secondary/50 text-foreground/80 rounded-md"
                    >
                      {brand}
                    </span>
                  ))}
                  {category.popular.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md">
                      +{category.popular.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Arrow */}
              <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                <span className="text-sm font-medium">Explore</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Quick Help */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-surface p-6 rounded-2xl border border-primary/20">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary animate-charge" />
            </div>
            <div className="text-left">
              <h3 className="font-display font-bold text-lg text-foreground">
                Not sure which battery you need?
              </h3>
              <p className="text-muted-foreground">
                Our experts will help you find the perfect match for your vehicle
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 ml-4">
              <a href="#contact" aria-label="Go to contact" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-display font-semibold inline-flex items-center justify-center">
                Get Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleCategorySection;