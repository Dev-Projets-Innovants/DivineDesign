import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Shield } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white mt-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
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
              <li><HashLink smooth to="/#home" className="text-gray-300 hover:text-cameroon-yellow transition-colors">Home</HashLink></li>
              <li><HashLink smooth to="/#about" className="text-gray-300 hover:text-cameroon-yellow transition-colors">About</HashLink></li>
              <li><HashLink smooth to="/#services" className="text-gray-300 hover:text-cameroon-yellow transition-colors">Services</HashLink></li>
              <li><HashLink smooth to="/#faq" className="text-gray-300 hover:text-cameroon-yellow transition-colors">FAQ</HashLink></li>
              <li><Link to="/trust-safety" className="text-gray-300 hover:text-cameroon-yellow transition-colors">Trust & Safety</Link></li>
              <li><HashLink smooth to="/#contact" className="text-gray-300 hover:text-cameroon-yellow transition-colors">Contact</HashLink></li>
            </ul>
          </div>
          
          <div>
            <div className="bg-gradient-to-r from-cameroon-green to-blue-600 p-4 rounded-lg mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-white" />
                <h3 className="font-semibold text-white">Trust & Community</h3>
              </div>
              <p className="text-sm text-white/90 mb-3">🛡️ 100% Legitimate Services</p>
              <Link to="/trust-safety">
                <Button variant="outline" size="sm" className="border-white hover:bg-white text-red-500">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <HashLink smooth to="/#contact">
              <Button className="w-full bg-cameroon-green hover:bg-cameroon-green/80">Let's Build Together! 🌟</Button>
            </HashLink>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} Divine Ngah Design. All rights reserved.</p>
          <p className="mt-2">Professional graphic design services in Cameroon 🇨🇲</p>
        </div>
      </div>
    </footer>;
};
export default Footer;