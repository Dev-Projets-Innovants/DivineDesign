
import { Brush, GalleryHorizontal, Layers } from "lucide-react";

// About section data
const skills = [
  { name: 'UI Design', level: 95 },
  { name: 'Logo Design', level: 90 },
  { name: 'Branding', level: 85 },
  { name: 'Web Design', level: 88 },
];

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
