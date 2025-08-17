import { Monitor, Search, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Monitor,
    title: 'Web Design & Development',
    description: 'Custom, responsive websites built with modern technologies. Fast-loading, mobile-friendly designs that convert visitors into customers.',
    features: ['Responsive Design', 'Fast Loading', 'SEO-Ready', 'Mobile-First'],
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your Indianapolis business visibility with local SEO strategies. Rank higher on Google and attract more qualified leads.',
    features: ['Local SEO', 'Keyword Research', 'Google My Business', 'Technical SEO'],
  },
  {
    icon: TrendingUp,
    title: 'Marketing & Branding',
    description: 'Complete digital marketing solutions including logo design, social media strategy, and growth-focused marketing campaigns.',
    features: ['Logo Design', 'Social Media', 'Content Strategy', 'Brand Identity'],
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Services That Drive <span className="text-magenta-600">Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive web design, SEO, and marketing services tailored for Indianapolis businesses 
            looking to dominate their local market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-magenta-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-magenta-600 transition-colors">
                <service.icon 
                  size={32} 
                  className="text-magenta-600 group-hover:text-white transition-colors" 
                />
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-magenta-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                className="inline-flex items-center text-magenta-600 font-semibold hover:text-magenta-700 transition-colors"
              >
                Learn More
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}