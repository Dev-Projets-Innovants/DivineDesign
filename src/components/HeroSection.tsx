
import { Button } from '@/components/ui/button';
import { HashLink } from 'react-router-hash-link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 z-0"></div>
      <div className="absolute right-0 top-0 h-full w-1/2 bg-cameroon-yellow/5 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-cameroon-green/5 z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-cameroon-red/5 z-0"></div>
      
      {/* Color bar */}
      <div className="absolute left-0 top-0 h-1 w-full z-10">
        <div className="flex h-full">
          <div className="flex-1 bg-cameroon-green"></div>
          <div className="flex-1 bg-cameroon-red"></div>
          <div className="flex-1 bg-cameroon-yellow"></div>
        </div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Creating <span className="text-gradient">Beautiful</span> Visual Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-4 max-w-xl">
              Hi, I'm Divine Ngah! A passionate graphic designer and Chemistry student based in Bamenda, Cameroon.
            </p>
            <p className="text-md text-gray-600 mb-8 max-w-xl">
              Specializing in logos, flyers, business cards, and custom designs that combine creativity with practicality. 
              2 years of professional experience serving satisfied clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-cameroon-green hover:bg-cameroon-green/90"
              >
                <HashLink smooth to="#services">View Services</HashLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cameroon-green text-cameroon-green hover:bg-cameroon-green/10"
              >
                <HashLink smooth to="#contact">Get in Touch</HashLink>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative h-[450px] w-[450px]">
              <div className="absolute w-64 h-64 bg-cameroon-red/10 rounded-lg transform rotate-12 top-12 right-12"></div>
              <div className="absolute w-64 h-64 bg-cameroon-yellow/20 rounded-lg transform -rotate-12 bottom-12 left-12"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/DivineDesign/lovable-uploads/7f8181cb-7492-4647-ba0a-b4ff898abe22.png"
                  alt="Divine Ngah - Professional Designer"
                  className="w-72 h-72 object-cover rounded-lg shadow-xl z-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
