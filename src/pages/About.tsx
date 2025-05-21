
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const skills = [
  { name: 'UI Design', level: 95 },
  { name: 'Logo Design', level: 90 },
  { name: 'Branding', level: 85 },
  { name: 'Web Design', level: 88 },
  { name: 'Prototyping', level: 80 },
  { name: 'User Research', level: 75 },
];

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-gray-300">
              UI Designer & Logo Creator based in Cameroon, specializing in creating beautiful, 
              functional designs that blend modern aesthetics with African cultural influences.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section-container">
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
              <p>
                When I'm not designing, you can find me exploring the beautiful landscapes of Cameroon, 
                mentoring aspiring designers, or volunteering with local creative communities.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-cameroon-green hover:bg-cameroon-green/90"
                asChild
              >
                <Link to="/contact">Contact Me</Link>
              </Button>
              <Button
                variant="outline"
                className="border-cameroon-green text-cameroon-green hover:bg-cameroon-green/10"
                asChild
              >
                <Link to="/portfolio">View My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="bg-gray-50 py-20 mt-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are the key areas of expertise that I bring to each project, reflecting 
              years of practice, learning, and professional experience.
            </p>
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
      
      {/* Vision & Mission */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-cameroon-green">
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="text-gray-600">
              To elevate Cameroonian businesses and African brands through world-class design that 
              combines global best practices with our rich cultural heritage, contributing to 
              the digital transformation of the continent.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-cameroon-yellow">
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p className="text-gray-600">
              To provide accessible, high-quality design services to businesses in Cameroon and beyond, 
              creating digital experiences that are both beautiful and functional while celebrating 
              African creativity and innovation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="bg-gray-900 text-white py-20 mt-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-4 text-cameroon-yellow opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl italic mb-6">
              "Working with [Your Name] transformed our brand. The new logo and website design perfectly 
              captured our vision while adding something unique we couldn't have imagined. The attention 
              to our cultural context while maintaining global appeal was impressive."
            </p>
            <div>
              <p className="font-bold">Jean Mbarga</p>
              <p className="text-gray-400">CEO, Afri-Tech Solutions</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-gray-600 mb-8">
            Let's work together to bring your vision to life with designs that truly represent your brand.
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
              className="border-cameroon-green text-cameroon-green hover:bg-cameroon-green/10"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
