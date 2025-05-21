
import { Button } from './ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's collaborate to create stunning designs that elevate your brand and engage your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-cameroon-green hover:bg-cameroon-green/90"
            >
              Get in Touch
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
