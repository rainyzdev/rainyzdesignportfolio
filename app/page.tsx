import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import TestimonialsSection from '@/components/TestimonialsSection';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Design & SEO Services in Indianapolis | Mehdi Alloui Portfolio',
  description: 'Professional web designer & SEO specialist in Indianapolis. Custom websites, local SEO, and digital marketing services for Indianapolis businesses. Fast, mobile-friendly, results-driven.',
  keywords: 'Indianapolis web designer, web design Indianapolis, SEO Indianapolis, Indianapolis digital marketing, website development Indianapolis, local SEO services',
};

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <ServicesPreview />
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-magenta-600 to-magenta-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Grow Your Indianapolis Business Online?
          </h2>
          <p className="text-xl text-magenta-100 mb-8 max-w-3xl mx-auto">
            Join 50+ successful Indianapolis businesses that have transformed their online presence 
            with professional web design and SEO services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors group"
            >
              Start Your Project Today
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}