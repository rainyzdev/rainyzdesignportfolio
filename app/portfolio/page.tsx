import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio - Indianapolis Web Design Projects | Mehdi Alloui',
  description: 'View my portfolio of successful web design and SEO projects for Indianapolis businesses. See real results from restaurants, law firms, auto dealers, and more.',
  keywords: 'Indianapolis web design portfolio, web design examples Indianapolis, SEO case studies Indianapolis, website development portfolio Indiana',
};

const projects = [
  {
    title: 'Indianapolis Restaurant Group',
    category: 'Restaurant & Hospitality',
    image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Modern restaurant website with online ordering system and local SEO optimization.',
    problem: 'Low online visibility and no online ordering system during COVID-19.',
    solution: 'Built responsive website with integrated ordering system and local SEO strategy.',
    results: ['200% increase in online orders', '150% boost in website traffic', '#1 ranking for "Indianapolis Italian restaurant"'],
    technologies: ['Next.js', 'React', 'Local SEO', 'Online Ordering Integration'],
    url: '#'
  },
  {
    title: 'Central Indiana Auto Dealership',
    category: 'Automotive',
    image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete website redesign with inventory management and lead generation optimization.',
    problem: 'Outdated website with poor mobile experience and low conversion rates.',
    solution: 'Redesigned with mobile-first approach, optimized for local car buyers, and integrated CRM.',
    results: ['300% increase in online leads', '85% improvement in mobile experience', 'Top 3 Google ranking for target keywords'],
    technologies: ['WordPress', 'Custom CRM Integration', 'Local SEO', 'Lead Generation'],
    url: '#'
  },
  {
    title: 'Smith & Associates Law Firm',
    category: 'Legal Services',
    image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Professional law firm website with case study showcases and client portal.',
    problem: 'Generic template website with no clear value proposition or client testimonials.',
    solution: 'Custom design emphasizing expertise, client success stories, and easy contact methods.',
    results: ['400% increase in consultation requests', 'Improved professional credibility', 'Higher quality client inquiries'],
    technologies: ['React', 'SEO Optimization', 'Content Strategy', 'Professional Design'],
    url: '#'
  },
  {
    title: 'Indiana Home Services',
    category: 'Home Improvement',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Service-based website with booking system and customer review integration.',
    problem: 'Difficulty scheduling appointments and showcasing completed projects.',
    solution: 'Built booking system with photo galleries and integrated customer review system.',
    results: ['250% increase in online bookings', 'Streamlined customer acquisition', 'Improved customer satisfaction'],
    technologies: ['Next.js', 'Booking System', 'Review Integration', 'Photo Galleries'],
    url: '#'
  },
  {
    title: 'Indianapolis Fitness Center',
    category: 'Health & Wellness',
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Fitness center website with membership management and class scheduling.',
    problem: 'Manual membership management and poor online class visibility.',
    solution: 'Integrated membership portal with class schedules and online registration.',
    results: ['180% increase in membership sign-ups', 'Reduced administrative workload', 'Improved member engagement'],
    technologies: ['React', 'Membership Portal', 'Class Scheduling', 'Payment Integration'],
    url: '#'
  },
  {
    title: 'Indianapolis Tech Startup',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Modern SaaS landing page with conversion optimization and investor presentation.',
    problem: 'Low conversion rates and unclear value proposition for potential customers.',
    solution: 'Redesigned with clear messaging, social proof, and conversion-optimized landing pages.',
    results: ['350% improvement in conversion rate', 'Successful Series A funding', 'Clear brand positioning'],
    technologies: ['Next.js', 'A/B Testing', 'Conversion Optimization', 'Modern Design'],
    url: '#'
  }
];

export default function Portfolio() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My Indianapolis <span className="text-magenta-400">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover how I've helped Indianapolis businesses transform their online presence 
              with custom web design, SEO optimization, and digital marketing strategies that deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - Indianapolis web design project`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-magenta-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">The Problem:</h4>
                      <p className="text-gray-600 text-sm">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">My Solution:</h4>
                      <p className="text-gray-600 text-sm">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-black mb-3">Results Achieved:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-magenta-600 rounded-full mr-3 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-black mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.url}
                    className="inline-flex items-center text-magenta-600 font-semibold hover:text-magenta-700 transition-colors"
                  >
                    View Case Study
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be My Next <span className="text-magenta-400">Success Story</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's build your website today and join these successful Indianapolis businesses 
            that are dominating their local markets online.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-magenta-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-magenta-700 transition-colors group"
          >
            Start Your Project
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}