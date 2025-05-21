
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import { GalleryHorizontal, Layers, Brush, ArrowRight } from 'lucide-react';

// Portfolio section data
const categories = ['All', 'UI Design', 'Logo Design', 'Branding', 'Web Design', 'Before/After'];

const projects = [
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
    description: "Modern logo design for a Cameroonian tourism company highlighting the country's natural beauty and culture.",
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
  {
    id: 4,
    title: 'Restaurant Branding',
    category: 'Branding',
    imageUrl: '/placeholder.svg',
    description: 'Complete brand identity for a local fusion restaurant, including logo, color palette, and print materials.',
    beforeAfter: false,
  },
  {
    id: 5,
    title: 'Tech Startup Website',
    category: 'Web Design',
    imageUrl: '/placeholder.svg',
    description: 'Modern, responsive website design for a Douala-based tech startup with attention to loading speed and mobile optimization.',
    beforeAfter: false,
  },
  {
    id: 6,
    title: 'Fashion Brand Logo',
    category: 'Logo Design',
    imageUrl: '/placeholder.svg',
    description: 'Elegant logo design for a contemporary African fashion brand blending traditional patterns with modern aesthetics.',
    beforeAfter: false,
  },
];

// Services data
const services = [
  {
    title: 'UI/UX Design',
    description: 'I create intuitive, beautiful interfaces that engage users and boost conversion rates.',
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
    icon: <GalleryHorizontal size={24} className="text-cameroon-green" />,
    features: ['Personalized consultation', 'Custom solutions', 'Comprehensive support', 'Ongoing maintenance'],
    price: 'Custom',
    popular: false,
  },
];

// About section data
const skills = [
  { name: 'UI Design', level: 95 },
  { name: 'Logo Design', level: 90 },
  { name: 'Branding', level: 85 },
  { name: 'Web Design', level: 88 },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : activeCategory === 'Before/After'
      ? projects.filter(project => project.beforeAfter)
      : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>
      
      {/* About Section */}
      <section id="about" className="section-container py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">About <span className="text-cameroon-green">Me</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I create stunning digital experiences that blend modern design with Cameroonian cultural influences, 
            helping businesses stand out in an increasingly digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-cameroon-yellow/10 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cameroon-green/10 rounded-full"></div>
              <img
                src="/placeholder.svg"
                alt="Designer Portrait"
                className="rounded-lg w-full h-auto relative z-10"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">My Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Hello! I'm [Your Name], a passionate UI designer and logo creator based in Douala, Cameroon. 
                With over 8 years of experience in digital design, I've had the privilege of working with 
                businesses across Cameroon and beyond.
              </p>
              <p>
                My design journey began at [University/School] where I studied graphic design, before 
                specializing in user interface design and branding. I've since worked with startups, 
                established businesses, and international organizations to create meaningful digital experiences.
              </p>
              <p>
                My approach combines modern design principles with elements inspired by the rich cultural 
                heritage of Cameroon and Africa at large. I believe in creating designs that are not only 
                visually appealing but also functional, accessible, and culturally relevant.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
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
              <GalleryHorizontal size={28} className="text-cameroon-red" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
            <p className="text-gray-600">Cohesive visual systems that communicate your brand's unique story</p>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">My Skills</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="text-cameroon-green">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-cameroon-green h-full rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" className="border-gradient bg-gray-50 py-20">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">My <span className="text-cameroon-green">Portfolio</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore my latest work across UI design, logo creation, and branding projects.
            </p>
          </div>
          
          {/* Filter Categories */}
          <div className="py-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "ghost"}
                  className={
                    activeCategory === category
                      ? "bg-cameroon-green hover:bg-cameroon-green/90"
                      : "text-gray-700 hover:text-cameroon-green"
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
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
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-medium text-gray-500">No projects found in this category</h3>
              <p className="text-gray-400 mt-2">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="section-container py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">My <span className="text-cameroon-green">Services</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I offer comprehensive design solutions tailored to meet your business needs and goals.
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
      </section>
      
      {/* Contact Section */}
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
    </div>
  );
};

export default Index;
