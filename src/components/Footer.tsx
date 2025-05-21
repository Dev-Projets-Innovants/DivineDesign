
import { HashLink } from 'react-router-hash-link';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">
              <span className="text-cameroon-green">CM</span>
              <span className="text-cameroon-yellow">Design</span>
            </h2>
            <p className="text-gray-300 max-w-md mb-4">
              Professional UI design and logo creation services based in Cameroon, bringing your digital vision to life with a touch of African creativity.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-cameroon-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cameroon-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cameroon-yellow transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><HashLink smooth to="#home" className="text-gray-300 hover:text-cameroon-yellow transition-colors">Home</HashLink></li>
              <li><HashLink smooth to="#portfolio" className="text-gray-300 hover:text-cameroon-yellow transition-colors">Portfolio</HashLink></li>
              <li><HashLink smooth to="#about" className="text-gray-300 hover:text-cameroon-yellow transition-colors">About</HashLink></li>
              <li><HashLink smooth to="#services" className="text-gray-300 hover:text-cameroon-yellow transition-colors">Services</HashLink></li>
              <li><HashLink smooth to="#contact" className="text-gray-300 hover:text-cameroon-yellow transition-colors">Contact</HashLink></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Douala, Cameroon</p>
              <p>Email: <a href="mailto:info@cmdesign.cm" className="hover:text-cameroon-yellow transition-colors">info@cmdesign.cm</a></p>
              <p>Phone: <a href="tel:+237600000000" className="hover:text-cameroon-yellow transition-colors">+237 600 000 000</a></p>
            </address>
            <HashLink smooth to="#contact">
              <Button className="mt-4 bg-cameroon-green hover:bg-cameroon-green/80">Get Quote</Button>
            </HashLink>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} CMDesign. All rights reserved.</p>
          <p className="mt-2">Designed and developed in Cameroon 🇨🇲</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
