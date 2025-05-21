
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: '#home', label: 'Home' },
    { path: '#portfolio', label: 'Portfolio' },
    { path: '#about', label: 'About' },
    { path: '#services', label: 'Services' },
    { path: '#contact', label: 'Contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <HashLink smooth to="#home" className="flex items-center">
            <div className="font-bold text-xl text-black">
              <span className="text-cameroon-green">CM</span>
              <span className="text-cameroon-yellow">Design</span>
            </div>
          </HashLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <HashLink 
                key={link.path} 
                smooth
                to={link.path}
                className="font-medium px-3 py-2 rounded-md transition-colors hover:text-cameroon-green text-gray-700"
              >
                {link.label}
              </HashLink>
            ))}
            <Button className="bg-cameroon-green hover:bg-cameroon-green/80">
              <HashLink smooth to="#contact">Get Quote</HashLink>
            </Button>
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-cameroon-green"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div 
        className={`md:hidden bg-white shadow-lg absolute w-full left-0 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-2 space-y-3">
          {navLinks.map((link) => (
            <HashLink
              key={link.path}
              smooth
              to={link.path}
              className="block px-3 py-2 rounded-md transition-colors hover:text-cameroon-green text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </HashLink>
          ))}
          <Button className="w-full bg-cameroon-green hover:bg-cameroon-green/80 mt-2">
            <HashLink smooth to="#contact" className="w-full" onClick={() => setIsOpen(false)}>
              Get Quote
            </HashLink>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
