
import { Button } from './ui/button';
import { Star, Globe, Smartphone, Zap, Palette, Users } from 'lucide-react';

const WebsitePromoSection = () => {
  const services = [
    { icon: Globe, title: "Professional portfolio websites" },
    { icon: Zap, title: "Business landing pages" },
    { icon: Palette, title: "Creative showcases" },
    { icon: Star, title: "Brand identity development" },
    { icon: Users, title: "Complete digital presence setup" }
  ];

  const handleContactWhatsApp = () => {
    const message = encodeURIComponent("Hi Divine! I'm interested in getting a website like yours. Can you tell me more about your web development services?");
    window.open(`https://wa.me/237678438640?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cameroon-green to-cameroon-green/80 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-cameroon-yellow/20 rounded-full translate-y-24 -translate-x-24"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cameroon-yellow text-black px-4 py-2 rounded-full font-medium mb-4">
            <Star className="h-4 w-4" />
            Need A Website Like This?
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have an idea about your product and its digital representation?
          </h2>
          
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Whether you're a fellow creative, entrepreneur, or business owner looking to establish your online presence, 
            I can help bring your vision to life! From concept to creation, let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Services List */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Digital Solutions Available:
            </h3>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-full">
                    <service.icon className="h-4 w-4" />
                  </div>
                  <span className="text-white/90">{service.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Why Choose My Web Services?</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-cameroon-yellow" />
                <span>Mobile-friendly & responsive design</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-cameroon-yellow" />
                <span>Fast-loading, optimized performance</span>
              </div>
              <div className="flex items-center gap-3">
                <Palette className="h-5 w-5 text-cameroon-yellow" />
                <span>Custom design tailored to your brand</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-cameroon-yellow" />
                <span>Professional online presence</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
          <p className="text-white/90 mb-6">
            📱 Contact: +237 678 438 640 / +237 680 234 287
          </p>
          <p className="text-lg font-medium mb-8">
            Let's transform your ideas into stunning digital experiences that captivate your audience!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-cameroon-yellow text-black hover:bg-cameroon-yellow/90 font-semibold"
              onClick={handleContactWhatsApp}
            >
              Get My Website Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open("mailto:ngahdivine228@gmail.com?subject=Website%20Development%20Inquiry", "_blank")}
            >
              Email Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsitePromoSection;
