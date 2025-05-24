
import { Shield, AlertTriangle, Ban, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HashLink } from 'react-router-hash-link';

const TrustSafety = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cameroon-green text-white px-4 py-2 rounded-full font-medium mb-4">
            <Shield className="h-4 w-4" />
            Trust & Community Values
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🛡️ Our Commitment to the Cameroonian Community
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I understand that our community has faced numerous challenges with online scams and fraudulent individuals 
            claiming to offer design services. As a fellow Cameroonian and student at the University of Bamenda, 
            I want to assure you that my services are 100% legitimate and trustworthy.
          </p>
        </div>

        {/* Legitimate Services Section */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold text-green-800">100% Legitimate Services</h2>
          </div>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>All my work is original, professional, and delivered as promised</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>I provide real samples and proof of previous work before any payment</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>You can verify my identity and credentials through my university affiliation</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>I maintain transparent communication throughout every project</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>All designs are created from scratch with no plagiarism or stolen content</span>
            </div>
          </div>
        </div>

        {/* Trust & Integrity Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-blue-800">🤝 Built on Trust & Integrity</h2>
          </div>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>I am a real person with a real presence in Bamenda, Cameroon</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>You can visit me at the University of Bamenda if needed for verification</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>I have genuine contact numbers and respond to all legitimate inquiries</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>I deliver quality work that represents authentic value for your investment</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>My reputation in the local community is built on honesty and reliable service</span>
            </div>
          </div>
        </div>

        {/* Supporting Local Business Section */}
        <div className="bg-cameroon-green/10 border border-cameroon-green/30 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-cameroon-green mb-4">💪 Supporting Local Business</h2>
          <p className="text-gray-700">
            As a young Cameroonian entrepreneur, I believe in building our community through legitimate business practices. 
            When you work with me, you're supporting genuine local talent and contributing to positive economic growth in our region.
          </p>
        </div>

        {/* Professional Standards Section */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <h2 className="text-xl font-semibold text-red-800">⚠️ Professional Standards & Conduct Policy</h2>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-red-700 mb-3">Zero Tolerance for Misconduct:</h3>
            <p className="text-gray-700 mb-4">
              I maintain the highest professional standards and expect the same from all clients. Please note:
            </p>
            
            <div className="bg-red-100 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-red-800 mb-2">🚫 Prohibited Contact Purposes:</h4>
              <div className="space-y-2 text-sm text-red-700">
                <div className="flex items-center gap-2">
                  <Ban className="h-3 w-3" />
                  <span>Fraudulent or scamming attempts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ban className="h-3 w-3" />
                  <span>Harassment or inappropriate behavior</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ban className="h-3 w-3" />
                  <span>Time-wasting without genuine project interest</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ban className="h-3 w-3" />
                  <span>Requests for illegal or unethical design content</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ban className="h-3 w-3" />
                  <span>Any form of disrespectful or abusive communication</span>
                </div>
              </div>
            </div>

            <div className="bg-red-900/10 border border-red-300 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-red-800 mb-2">📢 Consequences for Misconduct:</h4>
              <div className="space-y-2 text-sm text-red-700">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-3 w-3 mt-0.5" />
                  <span><strong>Immediate Reporting:</strong> Any individual contacting me for scamming purposes or exhibiting bad behavior will be immediately reported to relevant authorities</span>
                </div>
                <div className="flex items-start gap-2">
                  <Ban className="h-3 w-3 mt-0.5" />
                  <span><strong>Permanent Blocking:</strong> Such contacts will be permanently blocked from all communication channels</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-3 w-3 mt-0.5" />
                  <span><strong>Community Alert:</strong> Serious cases may be shared with local business networks to protect other service providers</span>
                </div>
                <div className="flex items-start gap-2">
                  <Ban className="h-3 w-3 mt-0.5" />
                  <span><strong>Legal Action:</strong> When necessary, legal measures will be pursued to protect my business and the community</span>
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">✨ What I Expect:</h4>
              <div className="space-y-2 text-sm text-green-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3" />
                  <span>Respectful and professional communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3" />
                  <span>Genuine interest in design services</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3" />
                  <span>Clear project requirements and realistic expectations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3" />
                  <span>Timely responses and cooperation during project development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3" />
                  <span>Fair compensation for quality work delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-cameroon-green" />
              <span className="text-gray-700">Bamenda, Cameroon</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-cameroon-green" />
              <a href="mailto:ngahdivine228@gmail.com" className="text-cameroon-green hover:underline">
                ngahdivine228@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-cameroon-green" />
              <a href="https://wa.me/237678438640" className="text-cameroon-green hover:underline">
                +237 678 438 640
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cameroon-green to-cameroon-green/80 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">✨ Let's Build Together with Integrity! 🌟</h2>
          <p className="text-lg mb-6">
            I'm here to serve genuine clients who value quality design work and professional relationships. 
            Together, we can create amazing visual solutions while maintaining the trust and respect that our Cameroonian community deserves.
          </p>
          <HashLink smooth to="/#contact">
            <Button size="lg" className="bg-cameroon-yellow text-black hover:bg-cameroon-yellow/90 font-semibold">
              Get Started with Your Project
            </Button>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default TrustSafety;
