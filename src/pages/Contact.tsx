import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const handleShareWhatsApp = () => {
    const text = encodeURIComponent("Check out Divine Ngah's professional design services for logos, flyers, and more: https://divinedesigns.cm");
    window.open(`https://wa.me/?text=${text}`, '_blank');
    toast({
      title: "Share Link Generated",
      description: "WhatsApp sharing is now ready.",
    });
  };

  const handleShareFacebook = () => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=https://divinedesigns.cm', '_blank');
    toast({
      title: "Share Link Generated",
      description: "Facebook sharing is now ready.",
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-gray-300">
              Have a project in mind or want to learn more about our services? 
              Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              Feel free to reach out through any of these channels, and I'll get back to you 
              as soon as possible, typically within 24 hours during business days.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-cameroon-green/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cameroon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a href="mailto:info@cmdesign.cm" className="text-cameroon-green hover:underline">info@cmdesign.cm</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-cameroon-green/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cameroon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <a href="tel:+237600000000" className="text-cameroon-green hover:underline">+237 600 000 000</a>
                  <p className="text-sm text-gray-500 mt-1">Available Monday-Friday, 9am-6pm CAT</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-cameroon-green/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cameroon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-600">Douala, Cameroon</p>
                  <p className="text-sm text-gray-500 mt-1">Available for in-person meetings by appointment</p>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-10">
              <h3 className="font-semibold text-lg mb-4">Connect on Social Media</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=100059912252063" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
            <p className="text-gray-600 mb-6">
              For project inquiries, please provide the following information and I'll get back to 
              you with a detailed quote within 48 hours.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">What information to include:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Your name and business name</li>
                  <li>Type of project (UI design, logo, branding, etc.)</li>
                  <li>Project description and scope</li>
                  <li>Timeline requirements</li>
                  <li>Budget range (if established)</li>
                  <li>Preferred contact method</li>
                </ul>
              </div>
              
              <div className="pt-4">
                <Button 
                  size="lg"
                  className="w-full bg-cameroon-green hover:bg-cameroon-green/90"
                  onClick={() => {
                    window.location.href = "mailto:info@cmdesign.cm?subject=Project%20Quote%20Request&body=Hello,%0A%0AI'm%20interested%20in%20your%20design%20services.%20Here%20are%20some%20details%20about%20my%20project:%0A%0A-%20Name/Business:%0A-%20Project%20Type:%0A-%20Description:%0A-%20Timeline:%0A-%20Budget%20Range:%0A-%20Preferred%20Contact%20Method:%0A%0AThank%20you!";
                  }}
                >
                  Email for a Quote
                </Button>
              </div>
              
              <div className="pt-4 text-center">
                <p className="text-gray-500 text-sm mb-2">Or contact directly via WhatsApp</p>
                <Button 
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50"
                  onClick={() => {
                    window.open("https://wa.me/237600000000", "_blank");
                  }}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Share Section */}
      <section className="bg-gray-900 text-white py-16 mt-16">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Share With Your Network</h2>
            <p className="text-gray-300 mb-8">
              Know someone who might need design services? Share my profile with them!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700"
                onClick={handleShareWhatsApp}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Share on WhatsApp
              </Button>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleShareFacebook}
              >
                <Facebook size={20} className="mr-2" />
                Share on Facebook
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
