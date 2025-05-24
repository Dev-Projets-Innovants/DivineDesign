
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Button } from './ui/button';

// Portfolio section data
const categories = ['All', 'UI Design', 'Logo Design', 'Branding', 'Web Design', 'Before/After'];

const projects = [
  {
    id: 1,
    title: 'Church Service Event Poster',
    category: 'Branding',
    imageUrl: '/lovable-uploads/0de613cf-5d83-4d8d-b99c-924e529921f1.png',
    description: 'Professional church event poster featuring modern design elements with elegant typography and engaging visual layout for Sunday worship service.',
    beforeAfter: false,
  },
  {
    id: 2,
    title: 'Parfums De France Logo',
    category: 'Logo Design',
    imageUrl: '/lovable-uploads/84acf241-17e8-4f9c-9891-dab3f40f31cc.png',
    description: 'Elegant luxury perfume brand logo design with sophisticated golden elements on black background, emphasizing premium quality and French elegance.',
    beforeAfter: false,
  },
  {
    id: 3,
    title: 'Carols Resto Logo Design',
    category: 'Logo Design',
    imageUrl: '/lovable-uploads/63faa96d-194c-4652-8a1b-000c23818d55.png',
    description: 'Modern restaurant logo design with circular elements and professional typography, creating a sophisticated brand identity for dining establishment.',
    beforeAfter: false,
  },
  {
    id: 4,
    title: 'Gentle Brown Clothing Boutique Flyer',
    category: 'Branding',
    imageUrl: '/lovable-uploads/f7096ea9-a340-4daa-98ee-52e6409c8d34.png',
    description: 'Vibrant promotional flyer for clothing boutique featuring product showcase, contact information, and engaging blue design elements.',
    beforeAfter: false,
  },
  {
    id: 5,
    title: 'Grachi Luxury Hairs Business Poster',
    category: 'Branding',
    imageUrl: '/lovable-uploads/60b9639c-c65c-43d1-bc7a-55b1129747d1.png',
    description: 'Professional business poster for luxury hair salon featuring elegant golden logo design and comprehensive contact information layout.',
    beforeAfter: false,
  },
  {
    id: 6,
    title: 'Personal Business Card Design',
    category: 'Branding',
    imageUrl: '/lovable-uploads/2be029ed-3f18-452b-baaf-9e11596d5cc5.png',
    description: 'Clean and professional business card design for Ngah Divine Graphics Designer featuring modern layout with contact details and QR code.',
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
            Explore my latest work across logo design, branding, flyers, and business materials for clients across Cameroon.
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
