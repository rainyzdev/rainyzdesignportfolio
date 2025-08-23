import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import TestimonialsSection from '@/components/TestimonialsSection';

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
    </div>
  );
}