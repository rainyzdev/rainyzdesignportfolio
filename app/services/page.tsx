import type { Metadata } from 'next';
import { Monitor, Search, TrendingUp, Zap, Shield, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Design & SEO Services in Indianapolis | Mehdi Alloui',
  description: 'Professional web design, SEO optimization, and digital marketing services for Indianapolis businesses. Custom websites, local SEO, and marketing strategies that drive results.',
  keywords: 'web design services Indianapolis, SEO services Indianapolis, digital marketing Indianapolis, website development Indiana, local SEO Indianapolis, Indianapolis web designer',
};

const services = [
  {
    icon: Monitor,
    title: 'Custom Website Design & Development',
    description: 'Professional, fast-loading websites built with modern technologies and optimized for Indianapolis businesses.',
    features: [
      'Responsive, mobile-first design',
      'Fast loading speeds (under 3 seconds)',
      'SEO-ready architecture',
      'Custom functionality and integrations',
      'Content Management System (CMS)',
      'E-commerce capabilities',
      'Security and backup systems',
      'Analytics and tracking setup'
    ],
    benefits: [
      'Convert more visitors into customers',
      'Rank higher on Google search results',
      'Build trust with professional design',
      'Reduce bounce rates with fast loading'
    ]
  },
  {
    icon: Search,
    title: 'SEO Optimization & Local Search',
    description: 'Dominate local Indianapolis search results with proven SEO strategies that bring qualified leads to your business.',
    features: [
      'Local SEO for Indianapolis businesses',
      'Google My Business optimization',
      'Keyword research and strategy',
      'Technical SEO improvements',
      'Content optimization',
      'Local directory submissions',
      'Review management',
      'Monthly SEO reporting'
    ],
    benefits: [
      'Appear in top 3 Google results',
      'Attract more local customers',
      'Increase website organic traffic',
      'Build online reputation and trust'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing & Branding',
    description: 'Complete digital marketing solutions including branding, social media, and growth-focused marketing campaigns.',
    features: [
      'Logo and brand identity design',
      'Social media strategy and management',
      'Content creation and marketing',
      'Pay-per-click (PPC) advertising',
      'Email marketing campaigns',
      'Marketing automation',
      'Performance tracking and optimization',
      'Competitor analysis'
    ],
    benefits: [
      'Establish strong brand presence',
      'Generate consistent leads',
      'Increase customer engagement',
      'Maximize marketing ROI'
    ]
  }
];

const whyChooseMe = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Most websites completed within 2-4 weeks, with ongoing support and optimization.'
  },
  {
    icon: Shield,
    title: 'Local Indianapolis Expertise',
    description: 'Deep understanding of the Indianapolis market and local business landscape.'
  },
  {
    icon: Clock,
    title: 'Ongoing Support',
    description: '24/7 support and maintenance to keep your website running smoothly and securely.'
  },
  {
    icon: CheckCircle,
    title: 'Results Guaranteed',
    description: 'Proven track record with 50+ successful Indianapolis businesses and 100% satisfaction rate.'
  }
];

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Web Design & SEO Services in{' '}
              <span className="text-magenta-400">Indianapolis</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Comprehensive digital solutions for Indianapolis businesses looking to dominate their local market. 
              From custom website design to local SEO optimization, I help you attract more customers and grow online.
            </p>
            <div className="bg-magenta-600/20 border border-magenta-600/30 rounded-xl p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-magenta-200 font-medium">
                  🚀 <strong>Special Offer:</strong> Free SEO audit and consultation for new Indianapolis clients. 
                  Limited time offer!
                </p>
                <Link
                  href="/contact"
                  className="bg-magenta-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-magenta-700 transition-colors whitespace-nowrap"
                >
                  Book Consultation Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Complete Digital Solutions for <span className="text-magenta-600">Indianapolis Businesses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed online, from professional website design to local SEO 
              and digital marketing strategies that drive real results.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="bg-magenta-100 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                        <service.icon size={32} className="text-magenta-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-black">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-black mb-4">What's Included:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle size={16} className="text-magenta-600 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="bg-magenta-50 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-black mb-6">Benefits for Your Business:</h4>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start">
                          <div className="w-6 h-6 bg-magenta-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                            <CheckCircle size={16} className="text-white" />
                          </div>
                          <p className="text-gray-700 font-medium">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Why Choose Me for Your <span className="text-magenta-600">Indianapolis</span> Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable, fast, and clean code with local Indianapolis support. Here's what sets me apart 
              from other web designers and SEO specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseMe.map((reason, index) => (
              <div key={index} className="text-center group">
                <div className="bg-magenta-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-magenta-600 transition-colors">
                  <reason.icon size={40} className="text-magenta-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-4">
                Serving Indianapolis & Central Indiana
              </h3>
              <p className="text-gray-600 mb-6">
                As a local Indianapolis web designer, I understand the unique needs of businesses in our community. 
                I provide personalized service and local support that you won't get from large agencies or overseas developers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-magenta-600 mb-1">50+</div>
                  <div className="text-gray-600 text-sm">Local Clients Served</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-magenta-600 mb-1">100%</div>
                  <div className="text-gray-600 text-sm">Client Satisfaction</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-magenta-600 mb-1">24/7</div>
                  <div className="text-gray-600 text-sm">Local Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-magenta-600 to-magenta-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Indianapolis Business Online?
          </h2>
          <p className="text-xl text-magenta-100 mb-8 max-w-3xl mx-auto">
            Book a free consultation and discover how professional web design and SEO 
            can help your business dominate the Indianapolis market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              See Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}