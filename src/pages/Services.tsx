import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import { Brush, Layers, GalleryHorizontal, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'UI/UX Design',
    description: 'Create intuitive, beautiful interfaces that engage users and boost conversion rates.',
    icon: <Layers size={24} className="text-cameroon-green" />,
    features: [
      'Custom wireframes', 
      'Responsive design', 
      'User testing', 
      'Interactive prototypes', 
      'Design systems', 
      'Mobile and web interfaces'
    ],
    price: '250,000 FCFA',
    popular: true,
  },
  {
    title: 'Logo Design',
    description: 'Professional branding solutions with logos that perfectly communicate your brand story.',
    icon: <Brush size={24} className="text-cameroon-green" />,
    features: [
      'Multiple concepts', 
      'Unlimited revisions', 
      'All file formats', 
      'Brand guidelines', 
      'Color variations', 
      'Social media assets'
    ],
    price: '150,000 FCFA',
    popular: false,
  },
  {
    title: 'Branding',
    description: 'Comprehensive brand identity development to establish a cohesive visual presence.',
    icon: <GalleryHorizontal size={24} className="text-cameroon-green" />,
    features: [
      'Logo design', 
      'Color palette', 
      'Typography selection', 
      'Brand guidelines', 
      'Business cards', 
      'Letterhead design'
    ],
    price: '350,000 FCFA',
    popular: false,
  },
  {
    title: 'Web Design',
    description: 'Beautiful, responsive website designs optimized for performance and user engagement.',
    icon: <Layers size={24} className="text-cameroon-green" />,
    features: [
      'Responsive layouts', 
      'Performance optimization', 
      'Mobile-first approach', 
      'SEO-friendly structure', 
      'UI component library', 
      'Interactive elements'
    ],
    price: '300,000 FCFA',
    popular: false,
  },
  {
    title: 'App Design',
    description: 'User-friendly mobile app interfaces designed for optimal user experience and engagement.',
    icon: <Layers size={24} className="text-cameroon-green" />,
    features: [
      'iOS & Android design', 
      'Native UI elements', 
      'User flow mapping', 
      'Prototype testing', 
      'Interaction design', 
      'Animation concepts'
    ],
    price: '400,000 FCFA',
    popular: false,
  },
  {
    title: 'Custom Projects',
    description: 'Custom design services tailored to your specific needs and requirements.',
    icon: <GalleryHorizontal size={24} className="text-cameroon-green" />,
    features: [
      'Personalized consultation', 
      'Custom solutions', 
      'Comprehensive support', 
      'Ongoing maintenance', 
      'Multi-platform design', 
      'Project management'
    ],
    price: 'Custom',
    popular: false,
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your business, audience, and goals through detailed consultation.'
  },
  {
    number: '02',
    title: 'Research',
    description: 'Analysis of market trends, competitors, and target audience to inform our design approach.'
  },
  {
    number: '03',
    title: 'Concept Development',
    description: 'Creation of initial design concepts based on research findings and project requirements.'
  },
  {
    number: '04',
    title: 'Refinement',
    description: 'Iterative improvement of selected concepts based on your feedback and testing results.'
  },
  {
    number: '05',
    title: 'Finalization',
    description: 'Polishing and preparing final deliverables in all required formats and specifications.'
  },
  {
    number: '06',
    title: 'Support',
    description: 'Ongoing assistance and consultation to ensure successful implementation of your design.'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-gray-300">
              Professional design solutions tailored for businesses in Cameroon and across Africa,
              combining global standards with local cultural context.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      
      {/* Design Process */}
      <section className="bg-gray-50 py-20 mt-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Design Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure every project delivers results that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-cameroon-green/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Answers to common questions about our services, process, and pricing.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">How long does a typical project take?</h3>
            <p className="text-gray-600">
              Project timelines vary based on complexity. Logo design typically takes 1-2 weeks, 
              UI design projects range from 2-6 weeks, and comprehensive branding can take 4-8 weeks.
              We'll provide a detailed timeline during our initial consultation.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">What does the pricing include?</h3>
            <p className="text-gray-600">
              Our pricing includes all deliverables specified in your package, including source files, 
              implementation guidance, and a specific number of revisions. Additional revisions or 
              expanded scope can be accommodated at an additional cost.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Do you work with international clients?</h3>
            <p className="text-gray-600">
              Yes, while we're based in Cameroon, we work with clients globally. We can conduct 
              meetings via video conference and use collaborative tools to ensure a smooth process 
              regardless of location.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">What if I'm not satisfied with the designs?</h3>
            <p className="text-gray-600">
              Your satisfaction is our priority. Our process includes multiple revision stages to 
              ensure the final design meets your expectations. If you're not completely satisfied, 
              we'll work with you to address your concerns and make necessary adjustments.
            </p>
          </div>
        </div>
      </section>
      
      {/* Appointment/Quote Request */}
      <section className="bg-cameroon-green text-white py-20 mt-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-lg mb-6">
                Book a consultation or request a detailed quote tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-cameroon-green hover:bg-white/90"
                >
                  Schedule Appointment
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
              <h3 className="font-semibold text-xl mb-4">Our Service Guarantee</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Unlimited revisions until you're completely satisfied</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Direct communication with your designer throughout the project</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Full ownership of all final design files</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>30-day support after project completion</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Money-back guarantee if you're not satisfied</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
