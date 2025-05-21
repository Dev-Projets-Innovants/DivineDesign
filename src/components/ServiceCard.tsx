
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string;
  features?: string[];
  popular?: boolean;
}

const ServiceCard = ({
  title,
  description,
  icon,
  price,
  features = [],
  popular = false
}: ServiceCardProps) => {
  return (
    <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
      popular ? 'border-2 border-cameroon-yellow shadow-lg' : 'border border-gray-200'
    }`}>
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-cameroon-yellow text-black text-xs font-semibold px-3 py-1 rounded-bl-lg">
            Popular
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="h-12 w-12 rounded-lg bg-cameroon-green/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {price && (
          <div className="mb-4">
            <span className="text-2xl font-bold">{price}</span>
            {price !== 'Custom' && <span className="text-gray-500 text-sm ml-1">starting price</span>}
          </div>
        )}
        
        {features.length > 0 && (
          <ul className="mb-6 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-cameroon-green mr-2">✓</span>
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <Button className={`w-full ${
          popular ? 'bg-cameroon-green hover:bg-cameroon-green/90' : 'bg-gray-800 hover:bg-gray-700'
        }`}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
