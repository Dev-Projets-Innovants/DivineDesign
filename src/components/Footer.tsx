
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">
              <span className="text-cameroon-green">Divine</span>
              <span className="text-cameroon-yellow">Design</span>
            </h2>
            <p className="text-gray-300 max-w-md mb-4">
              Professional graphic design services based in Bamenda, Cameroon. Specializing in logos, flyers, 
              business cards, and custom visual solutions with 2 years of experience.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=100059912252063" target="_blank" rel="noopener noreferrer" className="hover:text-cameroon-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cameroon-yellow transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><HashLink smooth to="#home" className="text-gray-300 hover:text-cameroon-yellow transition-colors">Home</HashLink></li>
              <li><HashLink smooth to="#about" className="text-gray-300 hover:text-cameroon-yellow transition-colors">About</HashLink></li>
              <li><HashLink smooth to="#services" className="text-gray-300 hover:text-cameroon-yellow transition-colors">Services</HashLink></li>
              <li><HashLink smooth to="#faq" className="text-gray-300 hover:text-cameroon-yellow transition-colors">FAQ</HashLink></li>
              <li><HashLink smooth to="#contact" className="text-gray-300 hover:text-cameroon-yellow transition-colors">Contact</HashLink></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Trust & Safety</h3>
            <div className="flex items-center mb-4">
              <Shield className="h-5 w-5 text-cameroon-green mr-2" />
              <span className="text-gray-300">100% Legitimate Services</span>
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              Committed to transparency, integrity, and supporting the Cameroonian design community.
            </p>
            <Link to="/trust-safety">
              <Button className="bg-cameroon-green hover:bg-cameroon-green/80">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} Divine Ngah Design. All rights reserved.</p>
          <p className="mt-2">Professional graphic design services in Cameroon 🇨🇲</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
