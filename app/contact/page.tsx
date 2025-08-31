import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact - Indianapolis Web Designer & SEO Specialist | Mehdi Alloui',
  description: 'Contact Mehdi Alloui for professional web design, SEO, and digital marketing services in Indianapolis. Free consultation available for all Indianapolis businesses.',
  keywords: 'contact Indianapolis web designer, Indianapolis SEO services contact, web design consultation Indianapolis, Mehdi Alloui contact information',
};

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'contact@mehdialloui.com',
    action: 'mailto:contact@mehdialloui.com',
    note: 'Best for detailed project inquiries'
  },
  {
    icon: Phone,
    title: 'Phone',
    description: '(610) 816-9276',
    action: 'tel:+16108169276',
    note: 'If I am unable to take your call, please feel free to leave a detailed voicemail and I will return your call as soon as possible'
  },
  {
    icon: MessageCircle,
    title: 'Text Message',
    description: '(610) 816-9276',
    action: 'sms:+16108169276',
    note: 'For quick questions and updates'
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Indianapolis, IN',
    action: '#map',
    note: 'Serving all of Central Indiana'
  }
];

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'Most websites are completed within 2-3 weeks, depending on complexity and content readiness. Simple brochure sites can be done in 1-2 weeks, while e-commerce or custom applications may take 4-8 weeks.'
  },
  {
    question: 'Do you offer SEO services for existing websites?',
    answer: 'Yes! I provide comprehensive SEO audits and optimization services for existing websites. This includes technical SEO, content optimization, local SEO for Indianapolis businesses, and ongoing SEO management.'
  },
  {
    question: 'What is your pricing for web design projects?',
    answer: 'Pricing varies based on project scope and requirements. Basic websites start at $799, while more complex sites with custom functionality can range from $1,199-$7,999. I provide detailed quotes after our initial consultation.'
  },
  {
    question: 'Do you provide ongoing website maintenance?',
    answer: 'Absolutely! I offer monthly maintenance packages that include security updates, backups, performance monitoring, content updates, and technical support to keep your website running smoothly.'
  },
  {
    question: 'Can you help with Google My Business optimization?',
    answer: 'Yes, Google My Business optimization is a key part of my local SEO services. I help Indianapolis businesses optimize their listings, manage reviews, and improve local search visibility.'
  }
];

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Build Something Amazing <span className="text-magenta-400">Together</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Ready to transform your Indianapolis business with professional web design and SEO? 
              Get in touch for a free consultation and let's discuss how I can help you dominate your local market.
            </p>
            <div className="bg-magenta-600/20 border border-magenta-600/30 rounded-xl p-6">
              <div className="flex items-center">
                <Clock size={24} className="text-magenta-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-magenta-200 font-medium">
                    <strong>Free 30-minute consultation</strong> for all Indianapolis businesses
                  </p>
                  <p className="text-magenta-300 text-sm mt-1">
                    No obligation • No sales pressure • Just honest advice about your online presence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="bg-magenta-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-magenta-600 transition-colors">
                  <method.icon size={24} className="text-magenta-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-black mb-2">{method.title}</h3>
                <p className="text-magenta-600 font-medium mb-2">{method.description}</p>
                <p className="text-gray-600 text-sm">{method.note}</p>
              </a>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            <div className="space-y-8">
              {/* Response Time */}
              <div className="bg-magenta-50 rounded-2xl p-6 border border-magenta-100">
                <h3 className="text-xl font-bold text-black mb-4">Response Time</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700"><strong>Email:</strong> Within 24 hours</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700"><strong>Phone:</strong> Same day callback</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700"><strong>Consultation:</strong> Within 24-48 hours</span>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-black mb-4">Service Areas</h3>
                <div className="text-gray-700">
                  <p className="font-medium text-black mb-2">Primary Service Area:</p>
                  <p className="mb-4">Indianapolis Metro Area</p>
                  
                  <p className="font-medium text-black mb-2">Also Serving:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Carmel, IN</li>
                    <li>• Fishers, IN</li>
                    <li>• Westfield, IN</li>
                    <li>• Noblesville, IN</li>
                    <li>• Greenwood, IN</li>
                    <li>• All of Central Indiana</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Frequently Asked <span className="text-magenta-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about my web design and SEO services for Indianapolis businesses.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-black mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Don't see your question answered?</p>
            <a
              href="mailto:contact@mehdialloui.com"
              className="inline-flex items-center text-magenta-600 font-semibold hover:text-magenta-700 transition-colors"
            >
              Ask me directly via email
              <Mail size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              <span className="text-magenta-600">Indianapolis</span> Location
            </h2>
            <p className="text-xl text-gray-600">
              Serving businesses in Indianapolis and central Indiana
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99386.85424628334!2d-86.2544!3d39.7684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN!5e0!3m2!1sen!2sus!4v1635959542830!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Indianapolis, Indiana Location"
              ></iframe>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <MapPin size={24} className="text-magenta-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-black">Location</h3>
                  <p className="text-gray-600">Indianapolis, Indiana</p>
                </div>
                <div>
                  <Clock size={24} className="text-magenta-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-black">Service Radius</h3>
                  <p className="text-gray-600">50-mile radius from Indianapolis</p>
                </div>
                <div>
                  <Phone size={24} className="text-magenta-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-black">Local Support</h3>
                  <p className="text-gray-600">In-person meetings available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}