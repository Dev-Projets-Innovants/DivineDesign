
import { useState } from 'react';
import { Shield, CheckCircle, AlertTriangle, X, Users, Heart, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface TrustSafetyDialogProps {
  children: React.ReactNode;
}

const TrustSafetyDialog = ({ children }: TrustSafetyDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="flex items-center text-2xl">
            <Shield className="h-8 w-8 text-cameroon-green mr-3" />
            Trust & Safety
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(90vh-100px)] px-6 pb-6">
          <div className="space-y-8">
            {/* Header Description */}
            <p className="text-lg text-gray-600">
              Building trust in our Cameroonian design community through transparency, integrity, and professional excellence.
            </p>

            {/* Trust & Community Values */}
            <section>
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-cameroon-green">
                <div className="flex items-center mb-6">
                  <Shield className="h-6 w-6 text-cameroon-green mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Trust & Community Values</h2>
                </div>
                
                <div className="flex items-start mb-6">
                  <Heart className="h-6 w-6 text-cameroon-red mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">🛡️ Our Commitment to the Cameroonian Community</h3>
                    <p className="text-gray-700">
                      I understand that our community has faced numerous challenges with online scams and fraudulent individuals 
                      claiming to offer design services. As a fellow Cameroonian and student at the University of Bamenda, I want to assure you that:
                    </p>
                  </div>
                </div>

                {/* Legitimate Services */}
                <div className="bg-green-50 rounded-lg p-6 mb-6 border border-green-200">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    <h4 className="text-lg font-semibold text-green-800">✅ 100% Legitimate Services</h4>
                  </div>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      All my work is original, professional, and delivered as promised
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      I provide real samples and proof of previous work before any payment
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      You can verify my identity and credentials through my university affiliation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      I maintain transparent communication throughout every project
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      All designs are created from scratch with no plagiarism or stolen content
                    </li>
                  </ul>
                </div>

                {/* Built on Trust */}
                <div className="bg-blue-50 rounded-lg p-6 mb-6 border border-blue-200">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-blue-600 mr-2" />
                    <h4 className="text-lg font-semibold text-blue-800">🤝 Built on Trust & Integrity</h4>
                  </div>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      I am a real person with a real presence in Bamenda, Cameroon
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      You can visit me at the University of Bamenda if needed for verification
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      I have genuine contact numbers and respond to all legitimate inquiries
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      I deliver quality work that represents authentic value for your investment
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      My reputation in the local community is built on honesty and reliable service
                    </li>
                  </ul>
                </div>

                {/* Supporting Local Business */}
                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <div className="flex items-center mb-4">
                    <Heart className="h-6 w-6 text-yellow-600 mr-2" />
                    <h4 className="text-lg font-semibold text-yellow-800">💪 Supporting Local Business</h4>
                  </div>
                  <p className="text-yellow-700">
                    As a young Cameroonian, I believe in building our community through legitimate business practices. 
                    When you work with me, you're supporting genuine local talent and contributing to positive economic 
                    growth in our region.
                  </p>
                </div>
              </div>
            </section>

            {/* Professional Standards */}
            <section>
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
                <div className="flex items-center mb-6">
                  <Scale className="h-6 w-6 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">⚠️ Professional Standards & Conduct Policy</h2>
                </div>

                {/* Zero Tolerance */}
                <div className="bg-red-50 rounded-lg p-6 mb-6 border border-red-200">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                    <h4 className="text-lg font-semibold text-red-800">Zero Tolerance for Misconduct</h4>
                  </div>
                  <p className="text-red-700 mb-4">
                    I maintain the highest professional standards and expect the same from all clients. Please note:
                  </p>
                </div>

                {/* Prohibited Contact */}
                <div className="bg-red-100 rounded-lg p-6 mb-6 border-2 border-red-300">
                  <div className="flex items-center mb-4">
                    <X className="h-6 w-6 text-red-700 mr-2" />
                    <h4 className="text-lg font-semibold text-red-800">🚫 Prohibited Contact Purposes</h4>
                  </div>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-start">
                      <X className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      Fraudulent or scamming attempts
                    </li>
                    <li className="flex items-start">
                      <X className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      Harassment or inappropriate behavior
                    </li>
                    <li className="flex items-start">
                      <X className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      Time-wasting without genuine project interest
                    </li>
                    <li className="flex items-start">
                      <X className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      Requests for illegal or unethical design content
                    </li>
                    <li className="flex items-start">
                      <X className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      Any form of disrespectful or abusive communication
                    </li>
                  </ul>
                </div>

                {/* Consequences */}
                <div className="bg-orange-50 rounded-lg p-6 mb-6 border border-orange-200">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-orange-600 mr-2" />
                    <h4 className="text-lg font-semibold text-orange-800">📢 Consequences for Misconduct</h4>
                  </div>
                  <ul className="space-y-3 text-orange-700">
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Immediate Reporting:</strong> Any individual contacting me for scamming purposes or exhibiting 
                        bad behavior will be immediately reported to relevant authorities
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Permanent Blocking:</strong> Such contacts will be permanently blocked from all communication channels
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Community Alert:</strong> Serious cases may be shared with local business networks to protect other service providers
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Legal Action:</strong> When necessary, legal measures will be pursued to protect my business and the community
                      </div>
                    </li>
                  </ul>
                </div>

                {/* What I Expect */}
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    <h4 className="text-lg font-semibold text-green-800">✨ What I Expect</h4>
                  </div>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      Respectful and professional communication
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      Genuine interest in design services
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      Clear project requirements and realistic expectations
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      Timely responses and cooperation during project development
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      Fair compensation for quality work delivered
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cameroon-green to-cameroon-yellow rounded-lg p-8 text-white">
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Let's Build Together with Integrity! 🌟</h2>
                <p className="text-lg mb-6 max-w-3xl mx-auto">
                  I'm here to serve genuine clients who value quality design work and professional relationships. 
                  Together, we can create amazing visual solutions while maintaining the trust and respect that 
                  our Cameroonian community deserves.
                </p>
              </div>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TrustSafetyDialog;
