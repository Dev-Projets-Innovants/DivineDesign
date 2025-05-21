
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import { Gallery, Layers, Brush } from 'lucide-react';

const featuredProjects = [
  {
    id: 1,
    title: 'E-commerce App Redesign',
    category: 'UI Design',
    imageUrl: '/placeholder.svg',
    description: 'Complete redesign of a local e-commerce platform focusing on improving the user experience and conversion rate.',
    beforeAfter: true,
  },
  {
    id: 2,
    title: 'African Tours Logo',
    category: 'Logo Design',
    imageUrl: '/placeholder.svg',
    description: 'Modern logo design for a Cameroonian tourism company highlighting the country's natural beauty and culture.',
    beforeAfter: false,
  },
  {
    id: 3,
    title: 'Banking App Interface',
    category: 'UI Design',
    imageUrl: '/placeholder.svg',
    description: 'User-friendly mobile banking interface designed for accessibility and improved user engagement.',
    beforeAfter: false,
  },
];

const services = [
  {
    title: 'UI/UX Design',
    description: 'Create intuitive, beautiful interfaces that engage users and boost conversion rates.',
    icon: <Layers size={24} className="text-cameroon-green" />,
    features: ['Custom wireframes', 'Responsive design', 'User testing', 'Interactive prototypes'],
    price: '250,000 FCFA',
    popular: true,
  },
  {
    title: 'Logo Design',
    description: 'Professional branding solutions with logos that perfectly communicate your brand story.',
    icon: <Brush size={24} className="text-cameroon-green" />,
    features: ['Multiple concepts', 'Unlimited revisions', 'All file formats', 'Brand guidelines'],
    price: '150,000 FCFA',
    popular: false,
  },
  {
    title: 'Custom Projects',
    description: 'Custom design services tailored to your specific needs and requirements.',
    icon: <Gallery size={24} className="text-cameroon-green" />,
    features: ['Personalized consultation', 'Custom solutions', 'Comprehensive support', 'Ongoing maintenance'],
    price: 'Custom',
    popular: false,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <section className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Bringing Your <span className="text-cameroon-green">Vision</span> to Life</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We create stunning digital experiences that blend modern design with Cameroonian cultural influences, 
            helping businesses stand out in an increasingly digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6 rounded-lg bg-gray-50 border-t-4 border-cameroon-green">
            <div className="bg-cameroon-green/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brush size={28} className="text-cameroon-green" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Creative Design</h3>
            <p className="text-gray-600">Unique designs tailored to your brand identity and target audience</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-gray-50 border-t-4 border-cameroon-yellow">
            <div className="bg-cameroon-yellow/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Layers size={28} className="text-cameroon-yellow" />
            </div>
            <h3 className="text-xl font-semibold mb-2">User Experience</h3>
            <p className="text-gray-600">Intuitive interfaces that prioritize user needs and business goals</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-gray-50 border-t-4 border-cameroon-red">
            <div className="bg-cameroon-red/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gallery size={28} className="text-cameroon-red" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
            <p className="text-gray-600">Cohesive visual systems that communicate your brand's unique story</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-cameroon-green text-cameroon-green hover:bg-cameroon-green/10"
            asChild
          >
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="border-gradient bg-gray-50 py-16">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Recent <span className="text-cameroon-green">Projects</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our latest work across UI design, logo creation, and branding projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                description={project.description}
                beforeAfter={project.beforeAfter}
                hoverEffect={true}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              className="bg-cameroon-green hover:bg-cameroon-green/90"
              asChild
            >
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our <span className="text-cameroon-green">Services</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive design solutions tailored to meet your business needs and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              price={service.price}
              features={service.features}
              popular={service.popular}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-cameroon-green text-cameroon-green hover:bg-cameroon-green/10"
            asChild
          >
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-20">
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
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
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
    </div>
  );
};

export default Index;
