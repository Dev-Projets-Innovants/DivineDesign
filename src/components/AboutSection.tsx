
import { Brush, GalleryHorizontal, Layers } from "lucide-react";

// About section data
const skills = [
  { name: 'Logo Design', level: 95 },
  { name: 'Flyer Design', level: 90 },
  { name: 'Business Card Design', level: 88 },
  { name: 'Invitation Design', level: 85 },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-container py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">About <span className="text-cameroon-green">Me</span></h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I am Divine Ngah, a passionate graphic designer and Chemistry student at the University of Bamenda, 
          creating visual solutions that combine creativity with practicality.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-cameroon-yellow/10 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cameroon-green/10 rounded-full"></div>
            <img
              src="/DivineDesign/lovable-uploads/7f8181cb-7492-4647-ba0a-b4ff898abe22.png"
              alt="Divine Ngah - Designer Portrait"
              className="rounded-lg w-full h-auto relative z-10"
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-6">My Story</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Hello! I'm Divine Ngah, a passionate graphic designer and Chemistry student at the University of Bamenda, 
              Faculty of Science. While pursuing my dreams of becoming an industrial engineer, I have discovered a deep 
              love for graphic design that has become both my creative outlet and source of income.
            </p>
            <p>
              Based in Bamenda, Cameroon, I have been professionally creating visual solutions for clients across 
              various industries for the past two years. My approach combines creativity with practicality, ensuring 
              each project delivers real value to businesses and individuals.
            </p>
            <p>
              I believe in creating designs that are not only visually appealing but also reliable and effective for 
              my clients' needs. My expertise includes advanced proficiency in Pixel Lab and expert-level skills in 
              PosterMyWall, along with custom graphic creation and photo manipulation.
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
          <p className="text-gray-600">Memorable brand identities and visual solutions tailored to your needs</p>
        </div>
        
        <div className="text-center p-6 rounded-lg bg-gray-50 border-t-4 border-cameroon-yellow">
          <div className="bg-cameroon-yellow/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Layers size={28} className="text-cameroon-yellow" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Reliable Quality</h3>
          <p className="text-gray-600">2 years of professional experience with timely delivery and attention to detail</p>
        </div>
        
        <div className="text-center p-6 rounded-lg bg-gray-50 border-t-4 border-cameroon-red">
          <div className="bg-cameroon-red/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <GalleryHorizontal size={28} className="text-cameroon-red" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Local Understanding</h3>
          <p className="text-gray-600">Deep knowledge of Cameroonian market and cultural preferences</p>
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
