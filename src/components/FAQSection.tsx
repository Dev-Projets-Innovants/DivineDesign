
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      question: "Do you work with clients outside Cameroon?",
      answer: "Yes, I welcome international projects and can communicate in both French and English."
    },
    {
      question: "What if I need revisions?",
      answer: "I include reasonable revisions in all my packages to ensure complete satisfaction."
    },
    {
      question: "Can you work with tight deadlines?",
      answer: "Yes, rush orders are available with adjusted timelines and pricing."
    },
    {
      question: "What file formats do you provide?",
      answer: "I deliver designs in multiple formats including PNG, JPEG, PDF, and source files when requested."
    },
    {
      question: "How do I get started with my project?",
      answer: "Simply contact me via phone or email with your project details, and I'll provide a free consultation and quote."
    },
    {
      question: "What payment methods do you accept?",
      answer: "I accept mobile money transfers, bank transfers, and other convenient payment methods available in Cameroon."
    },
    {
      question: "Can you create designs that reflect Cameroonian culture?",
      answer: "Absolutely! I specialize in incorporating local cultural elements while maintaining modern design standards."
    },
    {
      question: "Do you also build static websites?",
      answer: "Yes! In addition to graphic design, I create professional static websites including portfolios, business sites, and landing pages. These are fast-loading, mobile-friendly websites perfect for showcasing your business or personal brand online."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about my design services and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleItem(index)}
                className="w-full bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-left hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900 pr-4">{item.question}</h3>
                  {openItems.includes(index) ? (
                    <Minus className="h-5 w-5 text-cameroon-green flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-cameroon-green flex-shrink-0" />
                  )}
                </div>
                
                {openItems.includes(index) && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
