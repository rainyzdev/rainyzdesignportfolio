import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { getBlogPosts, getBlogCategories } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Web Design & SEO Blog | Indianapolis Digital Marketing Tips | Mehdi Alloui',
  description: 'Expert insights on web design, SEO, and digital marketing for Indianapolis businesses. Tips, strategies, and industry updates to help your business grow online.',
  keywords: 'web design blog Indianapolis, SEO tips Indianapolis, digital marketing blog Indiana, Indianapolis business growth, web development insights',
  openGraph: {
    title: 'Web Design & SEO Blog | Indianapolis Digital Marketing Tips',
    description: 'Expert insights on web design, SEO, and digital marketing for Indianapolis businesses.',
    type: 'website',
    url: 'https://mehdi-alloui-portfolio.com/blog',
    images: [
      {
        url: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Web Design & SEO Blog for Indianapolis Businesses'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & SEO Blog | Indianapolis Digital Marketing Tips',
    description: 'Expert insights on web design, SEO, and digital marketing for Indianapolis businesses.',
    images: ['https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200']
  }
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const categories = await getBlogCategories();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Web Design & SEO <span className="text-magenta-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-up animation-delay-200">
              Expert tips, strategies, and insights to help Indianapolis businesses 
              succeed online with better web design, SEO, and digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full bg-magenta-600 text-white font-medium hover:bg-magenta-700 transition-colors"
            >
              All Posts
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article 
                key={post.slug} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-magenta-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span>{post.date}</span>
                    <Clock size={16} className="ml-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-black mb-3 hover:text-magenta-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-magenta-600 font-semibold hover:text-magenta-700 transition-colors group"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Indianapolis Business Tips
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get the latest web design, SEO, and marketing insights delivered to your inbox. 
            Exclusive tips for Indianapolis business owners.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-magenta-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-magenta-700 transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}