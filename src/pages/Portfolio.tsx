
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';

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
  {
    id: 7,
    title: 'Health App UI',
    category: 'UI Design',
    imageUrl: '/placeholder.svg',
    description: 'User interface design for a healthcare application focused on accessibility and ease of use for all demographics.',
    beforeAfter: true,
  },
  {
    id: 8,
    title: 'Local NGO Website Redesign',
    category: 'Web Design',
    imageUrl: '/placeholder.svg',
    description: 'Complete website overhaul for a Cameroonian non-profit organization with improved donation capabilities and storytelling.',
    beforeAfter: true,
  },
  {
    id: 9,
    title: 'Coffee Shop Brand Identity',
    category: 'Branding',
    imageUrl: '/placeholder.svg',
    description: 'Full branding package for an artisanal coffee shop featuring locally sourced coffee from Mount Cameroon region.',
    beforeAfter: false,
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : activeCategory === 'Before/After'
      ? projects.filter(project => project.beforeAfter)
      : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg text-gray-300">
              Explore our diverse collection of projects showcasing UI design, logo creation, and branding work
              for clients across Cameroon and beyond.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter Categories */}
      <section className="py-8 border-b border-gray-200 bg-white sticky top-16 z-30 shadow-sm">
        <div className="container max-w-7xl mx-auto px-4">
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
      </section>
      
      {/* Projects Grid */}
      <section className="section-container">
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
      </section>
      
      {/* Call to Action */}
      <section className="bg-gray-50 py-16 mt-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-600 mb-8">
              Let's collaborate to create stunning designs that elevate your brand and engage your audience.
            </p>
            <Button 
              size="lg" 
              className="bg-cameroon-green hover:bg-cameroon-green/90"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
