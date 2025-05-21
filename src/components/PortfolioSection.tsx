
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Button } from './ui/button';

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

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : activeCategory === 'Before/After'
      ? projects.filter(project => project.beforeAfter)
      : projects.filter(project => project.category === activeCategory);
      
  return (
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
  );
};

export default PortfolioSection;
