
import { useState } from 'react';
import { GalleryHorizontal } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  beforeAfter?: boolean;
  hoverEffect?: boolean;
}

const ProjectCard = ({
  title,
  category,
  imageUrl,
  description,
  beforeAfter = false,
  hoverEffect = false
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`group rounded-lg overflow-hidden shadow-md bg-white transition-all duration-300 ${
        hoverEffect ? 'transform hover:-translate-y-2 hover:shadow-xl' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={imageUrl || "/placeholder.svg"} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {beforeAfter && (
          <div className="absolute top-2 right-2 bg-cameroon-yellow text-black text-xs font-medium px-2 py-1 rounded">
            Before / After
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <p className="text-sm font-medium uppercase tracking-wider">{category}</p>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-xs text-gray-500 uppercase tracking-wider">{category}</span>
            <h3 className="font-bold text-lg">{title}</h3>
          </div>
          <div className="h-8 w-8 rounded-full bg-cameroon-green/10 flex items-center justify-center">
            <GalleryHorizontal size={16} className="text-cameroon-green" />
          </div>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
