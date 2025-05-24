
import { HashLink } from 'react-router-hash-link';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Shield, AlertTriangle, Ban, CheckCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
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
              <li><HashLink smooth to="#home" className="text-gray-300 hover:text-cameroon-yellow transition-colors">Home</HashLink></li>
              <li><HashLink smooth to="#about" className="text-gray-300 hover:text-cameroon-yellow transition-colors">About</HashLink></li>
              <li><HashLink smooth to="#services" className="text-gray-300 hover:text-cameroon-yellow transition-colors">Services</HashLink></li>
              <li><HashLink smooth to="#faq" className="text-gray-300 hover:text-cameroon-yellow transition-colors">FAQ</HashLink></li>
              <li><HashLink smooth to="#contact" className="text-gray-300 hover:text-cameroon-yellow transition-colors">Contact</HashLink></li>
            </ul>
          </div>
          
          <div>
            <div className="bg-gradient-to-r from-cameroon-green to-blue-600 p-4 rounded-lg mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-white" />
                <h3 className="font-semibold text-white">Trust & Community Values</h3>
              </div>
              <p className="text-sm text-white/90">🛡️ Commitment to the Cameroonian Community</p>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">100% Legitimate Services - University of Bamenda student</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Transparent communication & real samples provided</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Supporting genuine local Cameroonian talent</span>
              </div>
            </div>
            
            <div className="bg-red-900/30 border border-red-500/50 p-3 rounded-lg mt-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                <span className="font-semibold text-red-400 text-sm">Zero Tolerance Policy</span>
              </div>
              <div className="space-y-1 text-xs text-red-200">
                <div className="flex items-center gap-1">
                  <Ban className="h-3 w-3" />
                  <span>No fraud, scams, or harassment</span>
                </div>
                <div className="flex items-center gap-1">
                  <Ban className="h-3 w-3" />
                  <span>Professional conduct required</span>
                </div>
                <p className="text-red-300 mt-2">Violations reported to authorities</p>
              </div>
            </div>
            
            <HashLink smooth to="#contact">
              <Button className="mt-4 w-full bg-cameroon-green hover:bg-cameroon-green/80">Let's Build Together! 🌟</Button>
            </HashLink>
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
