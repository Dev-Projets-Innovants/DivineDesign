
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>
      
      {/* About Section */}
      <AboutSection />
      
      {/* Portfolio Section */}
      <PortfolioSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Index;
