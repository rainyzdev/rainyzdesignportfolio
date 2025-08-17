import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, Palette, Users, MessageCircle, BarChart, Target, Globe, Star } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Digital Marketing & Branding Services Indianapolis | Mehdi Alloui',
  description: 'Professional digital marketing and branding services for Indianapolis businesses. Logo design, social media marketing, content strategy, and brand development that drives growth.',
  keywords: 'digital marketing Indianapolis, branding services Indianapolis, logo design Indianapolis, social media marketing Indianapolis, Indianapolis marketing agency, brand development Indiana',
};

const services = [
  {
    icon: Palette,
    title: 'Brand Identity & Logo Design',
    description: 'Create a memorable brand that stands out in the competitive Indianapolis market.',
    features: ['Custom logo design', 'Brand color palette', 'Typography selection', 'Brand guidelines', 'Business card design', 'Letterhead design']
  },
  {
    icon: MessageCircle,
    title: 'Social Media Marketing',
    description: 'Engage your Indianapolis audience and build a loyal community around your brand.',
    features: ['Social media strategy', 'Content creation & scheduling', 'Community management', 'Paid social advertising', 'Influencer partnerships', 'Performance analytics']
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing Strategy',
    description: 'Comprehensive marketing campaigns that drive growth for Indianapolis businesses.',
    features: ['Marketing strategy development', 'Campaign planning & execution', 'Email marketing automation', 'PPC advertising management', 'Conversion optimization', 'ROI tracking']
  },
  {
    icon: Users,
    title: 'Content Marketing',
    description: 'Attract and engage your target audience with valuable, relevant content.',
    features: ['Content strategy development', 'Blog writing & optimization', 'Video content creation', 'Infographic design', 'Content calendar planning', 'Performance measurement']
  }
];

const brandingProcess = [
  {
    step: '01',
    title: 'Brand Discovery',
    description: 'Deep dive into your business values, target audience, and competitive landscape.'
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Create a comprehensive brand strategy that resonates with Indianapolis customers.'
  },
  {
    step: '03',
    title: 'Design & Creation',
    description: 'Develop visual identity, messaging, and marketing materials that reflect your brand.'
  },
  {
    step: '04',
    title: 'Launch & Optimize',
    description: 'Implement your brand across all touchpoints and continuously optimize performance.'
  }
];

const results = [
  {
    metric: '400%',
    description: 'Average increase in brand awareness for Indianapolis clients'
  },
  {
    metric: '250%',
    description: 'Boost in social media engagement within 3 months'
  },
  {
    metric: '180%',
    description: 'Increase in qualified leads from marketing campaigns'
  },
  {
    metric: '95%',
    description: 'Client satisfaction rate with our branding services'
  }
];

const packages = [
  {
    name: 'Brand Starter',
    price: '$1,500',
    description: 'Perfect for new Indianapolis businesses',
    features: [
      'Logo design (3 concepts)',
      'Brand color palette',
      'Typography selection',
      'Business card design',
      'Basic brand guidelines',
      'Social media templates'
    ]
  },
  {
    name: 'Complete Branding',
    price: '$3,500',
    description: 'Comprehensive branding solution',
    features: [
      'Everything in Brand Starter',
      'Extended logo variations',
      'Complete brand guidelines',
      'Letterhead & envelope design',
      'Website header design',
      'Marketing material templates',
      '3 months of brand support'
    ],
    popular: true
  },
  {
    name: 'Marketing Package',
    price: '$2,000/month',
    description: 'Ongoing marketing & brand management',
    features: [
      'Social media management',
      'Content creation & scheduling',
      'Email marketing campaigns',
      'Monthly performance reports',
      'Brand consistency monitoring',
      'Campaign optimization',
      'Priority support'
    ]
  }
];

export default function MarketingBrandingPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Digital Marketing & Branding Services in{' '}
                <span className="text-magenta-400">Indianapolis</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Build a powerful brand and marketing strategy that connects with Indianapolis customers. 
                From logo design to social media marketing, we help your business stand out and grow.
              </p>
              <div className="bg-magenta-600/20 border border-magenta-600/30 rounded-xl p-6 mb-8">
                <p className="text-magenta-200 font-medium">
                  🎨 <strong>Free Brand Consultation:</strong> Discover how professional branding 
                  can transform your Indianapolis business and attract more customers.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-magenta-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-magenta-700 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Digital marketing and branding services in Indianapolis"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-magenta-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Marketing Results That Drive Indianapolis Business Growth
            </h2>
            <p className="text-xl text-magenta-100 max-w-3xl mx-auto">
              Our marketing and branding strategies deliver measurable results that directly impact your business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-4">{result.metric}</div>
                <p className="text-magenta-100 leading-relaxed">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Complete Marketing & Branding Solutions for Indianapolis Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From brand identity to digital marketing campaigns, we provide everything your 
              Indianapolis business needs to build a strong market presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-magenta-100 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                    <service.icon size={32} className="text-magenta-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-magenta-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our Branding & Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A strategic approach to building brands that resonate with Indianapolis customers and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandingProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-magenta-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Why Indianapolis Businesses Choose Our Marketing Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <Target size={48} className="text-magenta-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">Local Market Expertise</h3>
              <p className="text-gray-600">Deep understanding of Indianapolis market dynamics and customer behavior.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <BarChart size={48} className="text-magenta-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">Data-Driven Results</h3>
              <p className="text-gray-600">Every campaign is optimized based on real performance data and analytics.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <Star size={48} className="text-magenta-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">Creative Excellence</h3>
              <p className="text-gray-600">Award-winning designs and campaigns that make your brand memorable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Marketing & Branding Packages for Indianapolis Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible packages designed to meet the unique needs and budgets of Indianapolis businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative border ${
                  plan.popular ? 'border-magenta-600 border-2' : 'border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-magenta-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-magenta-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-magenta-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-magenta-600 text-white hover:bg-magenta-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build a Powerful Brand in Indianapolis?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with professional branding and marketing that attracts customers, 
            builds loyalty, and drives sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-magenta-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-magenta-700 transition-colors"
            >
              Start Your Brand Journey
            </Link>
            <Link
              href="tel:+13175550123"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Call (317) 555-0123
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}