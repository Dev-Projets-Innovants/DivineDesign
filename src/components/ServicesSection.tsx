
import ServiceCard from './ServiceCard';
import { Brush, GalleryHorizontal, Layers, CreditCard, Calendar, Camera } from 'lucide-react';

// Services data
const services = [
  {
    title: 'Logo Design',
    description: 'Creating memorable brand identities that represent your business values and make lasting impressions.',
    icon: <Brush size={24} className="text-cameroon-green" />,
    features: ['Multiple concept designs', 'Unlimited revisions', 'All file formats', 'Brand guidelines included'],
    price: 'Custom',
    popular: true,
  },
  {
    title: 'Flyer Design',
    description: 'Eye-catching promotional materials for events and businesses that grab attention and drive results.',
    icon: <GalleryHorizontal size={24} className="text-cameroon-green" />,
    features: ['Print-ready designs', 'Digital formats', 'Event promotions', 'Business advertising'],
    price: 'Custom',
    popular: false,
  },
  {
    title: 'Business Cards',
    description: 'Professional networking tools that make lasting impressions and represent your brand perfectly.',
    icon: <CreditCard size={24} className="text-cameroon-green" />,
    features: ['Professional layouts', 'Print-ready files', 'Multiple design options', 'Quick turnaround'],
    price: 'Custom',
    popular: false,
  },
  {
    title: 'Invitation Cards',
    description: 'Elegant designs for weddings, parties, and special events that set the perfect tone.',
    icon: <Calendar size={24} className="text-cameroon-green" />,
    features: ['Wedding invitations', 'Party designs', 'Custom themes', 'RSVP integration'],
    price: 'Custom',
    popular: false,
  },
  {
    title: 'Birthday Photo Design',
    description: 'Personalized birthday graphics and photo montages that make celebrations memorable.',
    icon: <Camera size={24} className="text-cameroon-green" />,
    features: ['Photo montages', 'Custom graphics', 'Personalized themes', 'Social media ready'],
    price: 'Custom',
    popular: false,
  },
  {
    title: 'Custom Projects',
    description: 'General graphic design and custom visual solutions tailored to your specific needs.',
    icon: <Layers size={24} className="text-cameroon-green" />,
    features: ['Custom solutions', 'Photo manipulation', 'Brand packages', 'Flexible pricing'],
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
          Each project is crafted with attention to detail and delivered on time.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
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
      
      {/* Timeline Section */}
      <div className="mt-16 bg-gray-50 rounded-xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Project Timeline</h3>
          <p className="text-gray-600">Delivery schedule varies based on complexity and type</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-white rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Simple Designs</h4>
            <p className="text-cameroon-green font-bold text-xl mb-2">2-3 days</p>
            <p className="text-sm text-gray-600">Business cards, basic flyers</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Logo Designs</h4>
            <p className="text-cameroon-green font-bold text-xl mb-2">3-5 days</p>
            <p className="text-sm text-gray-600">Including revisions</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Complex Projects</h4>
            <p className="text-cameroon-green font-bold text-xl mb-2">5-10 days</p>
            <p className="text-sm text-gray-600">Complete branding packages</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
