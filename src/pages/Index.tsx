// Update this page (the content is just a fallback if you fail to update the page)

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import VehicleCategorySection from "../components/VehicleCategorySection";
import ServicesSection from "../components/ServicesSection";
import BrandsSection from "../components/BrandsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <VehicleCategorySection />
      <ServicesSection />
      <BrandsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
