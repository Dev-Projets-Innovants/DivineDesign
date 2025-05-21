import { Button } from './ui/button';
import { Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import { toast } from './ui/use-toast';
const ContactSection = () => {
  const handleShareWhatsApp = () => {
    const text = encodeURIComponent("Check out CMDesign for professional UI and logo design services: https://cmdesign.cm");
    window.open(`https://wa.me/?text=${text}`, '_blank');
    toast({
      title: "Share Link Generated",
      description: "WhatsApp sharing is now ready."
    });
  };
  return <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's collaborate to create stunning designs that elevate your brand and engage your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-cameroon-green hover:bg-cameroon-green/90">
              <a href="mailto:info@cmdesign.cm">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" onClick={() => {
            window.location.href = "mailto:info@cmdesign.cm?subject=Quote%20Request&body=I'm%20interested%20in%20your%20design%20services.";
          }} className="border-white text-gray-800 bg-amber-400 hover:bg-amber-300">
              Request a Quote
            </Button>
          </div>
          
          {/* Social Media Section */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Connect with me and verify my identity on different platforms </h3>
            <div className="flex justify-center space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <button onClick={handleShareWhatsApp} className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;