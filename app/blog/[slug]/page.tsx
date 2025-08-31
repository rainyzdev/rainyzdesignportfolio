import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, Tag, User } from 'lucide-react';
import { getBlogPost, getBlogPosts, generateBlogPostStructuredData } from '@/lib/blog';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts (SSG)
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Mehdi Alloui Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords.join(', '),
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: 'Mehdi Alloui',
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      type: 'article',
      url: `https://mehdi-alloui-portfolio.com/blog/${post.slug}`,
      images: [
        {
          url: post.seo.ogImage || post.image,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ],
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      section: post.category,
      tags: post.tags
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: [post.seo.ogImage || post.image],
      creator: '@mehdi_alloui'
    },
    alternates: {
      canonical: `https://mehdi-alloui-portfolio.com/blog/${post.slug}`
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  // Generate structured data for this blog post
  const structuredData = generateBlogPostStructuredData(post);

  return (
    <div className="pt-16">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-magenta-400 hover:text-magenta-300 transition-colors mb-8 animate-fade-in-up"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="mb-6 animate-fade-in-up animation-delay-200">
            <span className="bg-magenta-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-400">
            {post.title}
          </h1>
          
          <div className="flex items-center text-gray-300 mb-8 animate-fade-in-up animation-delay-600">
            <User size={16} className="mr-2" />
            <span className="mr-6">By {post.author}</span>
            <Calendar size={16} className="mr-2" />
            <span className="mr-6">{post.date}</span>
            <Clock size={16} className="mr-2" />
            <span>{post.readTime}</span>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-up animation-delay-800">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl -mt-10 animate-fade-in-up animation-delay-1000">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none animate-fade-in-up animation-delay-1200">
            <div 
              className="text-gray-700 leading-relaxed [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-black [&>h1]:mt-8 [&>h1]:mb-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-black [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-black [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:mb-6 [&>p]:leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/\n/g, '<br>')
                  .replace(/# (.*)/g, '<h1>$1</h1>')
                  .replace(/## (.*)/g, '<h2>$1</h2>')
                  .replace(/### (.*)/g, '<h3>$1</h3>')
              }}
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200 animate-fade-in-up animation-delay-1400">
            <div className="flex items-center flex-wrap gap-2">
              <Tag size={16} className="text-gray-500 mr-2" />
              <span className="text-gray-700 font-medium mr-4">Tags:</span>
              {post.tags.map((tag, index) => (
                <Link
                  key={index}
                  href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-magenta-100 hover:text-magenta-700 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8 animate-fade-in-up animation-delay-1600">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-magenta-600 rounded-full flex items-center justify-center mr-4">
                <User size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">About {post.author}</h3>
                <p className="text-gray-600">Web Designer & SEO Specialist</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Mehdi Alloui is a professional web designer and SEO specialist serving Indianapolis businesses. 
              With expertise in modern web development, local SEO, and digital marketing, Mehdi helps 
              Indianapolis companies build strong online presences that drive real business results.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help with Your Indianapolis Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how professional web design and SEO can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-magenta-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-magenta-700 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}