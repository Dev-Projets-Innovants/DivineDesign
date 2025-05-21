
import ServiceCard from './ServiceCard';
import { Brush, GalleryHorizontal, Layers } from 'lucide-react';

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

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;
