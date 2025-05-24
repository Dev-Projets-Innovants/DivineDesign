
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';
import FAQSection from '@/components/FAQSection';
import WebsitePromoSection from '@/components/WebsitePromoSection';
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
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Website Promo Section */}
      <WebsitePromoSection />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Index;
