import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Tag, ArrowLeft } from 'lucide-react';
import { getBlogPostsByTag, getBlogTags } from '@/lib/blog';
import { notFound } from 'next/navigation';

interface TagPageProps {
  params: {
    tag: string;
  };
}

// Generate static params for all tags
export async function generateStaticParams() {
  const tags = await getBlogTags();
  return tags.map((tag) => ({
    tag: tag.toLowerCase().replace(/\s+/g, '-'),
  }));
}

// Generate dynamic metadata for each tag
export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const tagName = params.tag.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return {
    title: `${tagName} Articles | Indianapolis Business Blog | Mehdi Alloui`,
    description: `Articles about ${tagName.toLowerCase()} for Indianapolis businesses. Expert insights and strategies to help your business succeed online.`,
    keywords: [`${tagName.toLowerCase()} Indianapolis`, `Indianapolis ${tagName.toLowerCase()}`, 'business tips', 'digital marketing'],
    openGraph: {
      title: `${tagName} Articles | Indianapolis Business Blog`,
      description: `Articles about ${tagName.toLowerCase()} for Indianapolis businesses.`,
      type: 'website',
      url: `https://mehdi-alloui-portfolio.com/blog/tag/${params.tag}`
    }
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const tagName = params.tag.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const posts = await getBlogPostsByTag(tagName);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-magenta-400 hover:text-magenta-300 transition-colors mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to All Posts
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-magenta-400">{tagName}</span> Articles
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              All articles tagged with "{tagName.toLowerCase()}" for Indianapolis businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
    </div>
  );
}