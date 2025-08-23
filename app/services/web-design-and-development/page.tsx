import type { Metadata } from 'next';
import Link from 'next/link';
import { Monitor, Zap, Shield, Smartphone, Search, Code, Palette, Globe } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Professional Web Design & Development Services in Indianapolis | Mehdi Alloui',
  description: 'Custom web design and development services for Indianapolis businesses. Fast, mobile-responsive websites that convert visitors into customers. Get a free quote today!',
  keywords: 'web design Indianapolis, website development Indianapolis, custom website design Indiana, responsive web design Indianapolis, professional web designer Indianapolis, Indianapolis web development company',
};

const features = [
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Every website is designed mobile-first to ensure perfect performance on all devices.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast Loading',
    description: 'Optimized for speed with loading times under 3 seconds for better user experience and SEO.'
  },
  {
    icon: Search,
    title: 'SEO-Ready Architecture',
    description: 'Built with clean code and SEO best practices to help you rank higher on Google.'
  },
  {
    icon: Shield,
    title: 'Security & Reliability',
    description: 'Secure hosting, SSL certificates, and regular backups to protect your business.'
  },
  {
    icon: Code,
    title: 'Clean, Modern Code',
    description: 'Hand-coded with the latest technologies for optimal performance and maintainability.'
  },
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Unique designs tailored to your brand.'
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We discuss your business goals, target audience, and project requirements to create a strategic plan.'
  },
  {
    step: '02',
    title: 'Design & Wireframes',
    description: 'Custom design mockups and wireframes that reflect your brand and optimize user experience.'
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Hand-coded development with responsive design, speed optimization, and thorough testing.'
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Website launch with training, ongoing support, and maintenance to keep your site running smoothly.'
  }
];

const pricing = [
  {
    name: 'Starter Website',
    price: '$2,500',
    description: 'Perfect for small businesses and startups',
    features: [
      '5-page responsive website',
      'Mobile-optimized design',
      'Basic SEO setup',
      'Contact form integration',
      'Google Analytics setup',
      '30 days of support'
    ]
  },
  {
    name: 'Professional Website',
    price: '$4,500',
    description: 'Ideal for established businesses',
    features: [
      '10-page responsive website',
      'Custom design & branding',
      'Advanced SEO optimization',
      'Content management system',
      'E-commerce ready',
      'Social media integration',
      '60 days of support'
    ],
    popular: true
  },
  {
    name: 'Enterprise Website',
    price: '$8,500',
    description: 'For large businesses with complex needs',
    features: [
      'Unlimited pages',
      'Custom functionality',
      'Advanced integrations',
      'Multi-language support',
      'Advanced security features',
      'Priority support',
      '90 days of support'
    ]
  }
];

export default function WebDesignPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Web Design & Development in{' '}
                <span className="text-magenta-400">Indianapolis</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Custom, fast-loading websites that convert visitors into customers. 
                Serving Indianapolis businesses with modern web design that drives results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-magenta-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-magenta-700 transition-colors"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional web design services in Indianapolis"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Why Choose Our Indianapolis Web Design Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create websites that not only look amazing but also perform exceptionally, 
              helping your Indianapolis business attract more customers and increase revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-magenta-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon size={32} className="text-magenta-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
              Our Web Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 4-step process that ensures your Indianapolis business gets a website 
              that drives results and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
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

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Transparent Web Design Pricing for Indianapolis Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable web design packages with no hidden fees. Choose the perfect solution for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative ${
                  plan.popular ? 'border-2 border-magenta-600' : ''
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
            Ready to Launch Your Indianapolis Business Online?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get a custom website that attracts customers, builds trust, and grows your business. 
            Free consultation and quote available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-magenta-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-magenta-700 transition-colors"
            >
              Start Your Project Today
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