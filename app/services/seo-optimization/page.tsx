import type { Metadata } from 'next';
import Link from 'next/link';
import { Search, TrendingUp, MapPin, Target, BarChart, Users, Globe, Star } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'SEO Services Indianapolis | Local SEO Optimization | Mehdi Alloui',
  description: 'Professional SEO services for Indianapolis businesses. Local SEO, Google My Business optimization, and search engine marketing that drives qualified leads and increases revenue.',
  keywords: 'SEO services Indianapolis, local SEO Indianapolis, Indianapolis SEO company, Google My Business optimization Indianapolis, search engine optimization Indiana, SEO consultant Indianapolis',
};

const seoServices = [
  {
    icon: MapPin,
    title: 'Local SEO Indianapolis',
    description: 'Dominate local search results and attract more Indianapolis customers to your business.',
    features: ['Google My Business optimization', 'Local directory submissions', 'Location-based keyword targeting', 'Local review management']
  },
  {
    icon: Search,
    title: 'Keyword Research & Strategy',
    description: 'Target the right keywords that your Indianapolis customers are actually searching for.',
    features: ['Competitor keyword analysis', 'Long-tail keyword research', 'Search intent optimization', 'Keyword difficulty assessment']
  },
  {
    icon: TrendingUp,
    title: 'Technical SEO',
    description: 'Fix technical issues that prevent your website from ranking higher on Google.',
    features: ['Site speed optimization', 'Mobile-first indexing', 'Schema markup implementation', 'XML sitemap optimization']
  },
  {
    icon: Target,
    title: 'Content Optimization',
    description: 'Create and optimize content that ranks well and converts visitors into customers.',
    features: ['On-page SEO optimization', 'Content gap analysis', 'Meta tag optimization', 'Internal linking strategy']
  }
];

const results = [
  {
    metric: '300%',
    description: 'Average increase in organic traffic for Indianapolis clients'
  },
  {
    metric: '85%',
    description: 'Of clients rank in top 3 Google results within 6 months'
  },
  {
    metric: '250%',
    description: 'Average increase in qualified leads from search'
  },
  {
    metric: '50+',
    description: 'Indianapolis businesses trust our SEO services'
  }
];

const process = [
  {
    step: '01',
    title: 'SEO Audit & Analysis',
    description: 'Comprehensive analysis of your current SEO performance and competitor research.'
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Custom SEO strategy tailored to your Indianapolis business goals and target audience.'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Execute on-page, technical, and local SEO optimizations for maximum impact.'
  },
  {
    step: '04',
    title: 'Monitoring & Reporting',
    description: 'Track progress with detailed monthly reports and continuous optimization.'
  }
];

const packages = [
  {
    name: 'Local SEO Starter',
    price: '$249/month',
    description: 'Perfect for small Indianapolis businesses',
    features: [
      'Google My Business optimization',
      'Local keyword research',
      'On-page SEO optimization',
      'Local directory submissions',
      'Monthly progress reports',
      'Review management setup'
    ]
  },
  {
    name: 'Professional SEO',
    price: '$1,249/month',
    description: 'Ideal for growing Indianapolis businesses',
    features: [
      'Everything in Starter package',
      'Advanced keyword research (50 keywords)',
      'Technical SEO optimization',
      'Content creation & optimization',
      'Link building campaign',
      'Competitor analysis',
      'Bi-weekly progress calls'
    ],
    popular: true
  },
  {
    name: 'Enterprise SEO',
    price: 'Contact for Pricing',
    description: 'For large businesses dominating their market',
    features: [
      'Everything in Professional package',
      'Unlimited keyword targeting',
      'Advanced technical SEO',
      'Custom content strategy',
      'Priority support',
      'Advanced analytics & reporting',
      'Weekly strategy calls'
    ]
  }
];

export default function SEOPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                SEO Services That Dominate{' '}
                <span className="text-magenta-400">Indianapolis</span> Search Results
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Professional SEO optimization that gets your Indianapolis business found by customers 
                actively searching for your services. Rank higher, get more leads, grow faster.
              </p>
              <div className="bg-magenta-600/20 border border-magenta-600/30 rounded-xl p-6 mb-8">
                <p className="text-magenta-200 font-medium">
                  🚀 <strong>Free SEO Audit:</strong> Get a comprehensive analysis of your website's 
                  SEO performance and discover opportunities to outrank your competitors.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-magenta-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-magenta-700 transition-colors"
                >
                  Get Free SEO Audit
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  View SEO Results
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="SEO services for Indianapolis businesses"
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
              Proven SEO Results for Indianapolis Businesses
            </h2>
            <p className="text-xl text-magenta-100 max-w-3xl mx-auto">
              Our SEO strategies deliver measurable results that directly impact your bottom line.
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
              Comprehensive SEO Services for Indianapolis Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From local SEO to technical optimization, we cover every aspect of search engine 
              optimization to help your business dominate Indianapolis search results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {seoServices.map((service, index) => (
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
              Our Proven SEO Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to SEO that delivers consistent, long-term results for Indianapolis businesses.
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
              Affordable SEO Packages for Indianapolis Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with no long-term contracts. Choose the SEO package that fits your business goals and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((plan, index) => (
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
            Ready to Dominate Indianapolis Search Results?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get more qualified leads, increase revenue, and outrank your competitors with 
            professional SEO services tailored for Indianapolis businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-magenta-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-magenta-700 transition-colors"
            >
              Get Free SEO Audit
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