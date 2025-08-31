export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
  tags: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    ogImage?: string;
  };
}

// Centralized blog posts data - Easy to manage and add new posts
const blogPosts: BlogPost[] = [
  {
    slug: 'web-design-trends-2025-indianapolis',
    title: '10 Web Design Trends Indianapolis Businesses Should Follow in 2025',
    excerpt: 'Discover the latest web design trends that will help your Indianapolis business stand out online and attract more customers in 2025.',
    content: `# 10 Web Design Trends Indianapolis Businesses Should Follow in 2025

As we move into 2025, web design continues to evolve rapidly. For Indianapolis businesses looking to stay competitive online, keeping up with the latest design trends is crucial for attracting and retaining customers.

## 1. Minimalist Design with Bold Typography

Clean, minimalist designs with bold, readable typography are dominating the web design landscape. Indianapolis businesses are finding that less clutter means better user experience and higher conversion rates.

## 2. Dark Mode Options

More websites are offering dark mode alternatives, providing users with a choice that reduces eye strain and creates a modern, sophisticated look.

## 3. Interactive Micro-Animations

Subtle animations and micro-interactions guide users through your website, making the experience more engaging and intuitive.

## 4. Mobile-First Design

With over 60% of Indianapolis web traffic coming from mobile devices, designing for mobile first is no longer optional—it's essential.

## 5. Sustainable Web Design

Eco-conscious design practices that reduce energy consumption are becoming increasingly important to Indianapolis consumers.

## Conclusion

Staying current with web design trends helps your Indianapolis business maintain a competitive edge. Contact us to discuss how we can update your website with these modern design elements.`,
    date: 'January 15, 2025',
    readTime: '5 min read',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Mehdi Alloui',
    tags: ['web design', 'trends', 'Indianapolis', 'UX design'],
    seo: {
      metaTitle: '10 Web Design Trends Indianapolis Businesses Should Follow in 2025 | Mehdi Alloui',
      metaDescription: 'Discover the latest web design trends that will help your Indianapolis business stand out online and attract more customers in 2025. Expert insights from Mehdi Alloui.',
      keywords: ['web design trends 2025', 'Indianapolis web design', 'modern web design', 'business website trends', 'Indianapolis business growth'],
      ogImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  },
  {
    slug: 'local-seo-guide-indianapolis-businesses',
    title: 'Complete Local SEO Guide for Indianapolis Businesses in 2025',
    excerpt: 'Master local SEO strategies specifically designed for Indianapolis businesses. Learn how to dominate local search results and attract more customers.',
    content: `# Complete Local SEO Guide for Indianapolis Businesses in 2025

Local SEO is crucial for Indianapolis businesses wanting to attract customers in their immediate area. This comprehensive guide will help you dominate local search results.

## Understanding Local SEO in Indianapolis

Local SEO helps your business appear in location-based searches when potential customers look for services "near me" or in "Indianapolis."

## Google My Business Optimization

Your Google My Business profile is the foundation of local SEO success in Indianapolis. Ensure your profile is complete, accurate, and regularly updated.

## Local Keyword Strategy

Target keywords that include "Indianapolis," "Indiana," and surrounding areas like "Carmel," "Fishers," and "Westfield."

## Building Local Citations

Consistent NAP (Name, Address, Phone) information across local directories helps establish trust with search engines.

## Customer Reviews Management

Positive reviews from Indianapolis customers significantly impact your local search rankings and customer trust.

## Conclusion

Implementing these local SEO strategies will help your Indianapolis business attract more local customers and dominate your market.`,
    date: 'January 12, 2025',
    readTime: '8 min read',
    category: 'SEO',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Mehdi Alloui',
    tags: ['local SEO', 'Indianapolis SEO', 'Google My Business', 'local search'],
    seo: {
      metaTitle: 'Complete Local SEO Guide for Indianapolis Businesses 2025 | Mehdi Alloui',
      metaDescription: 'Master local SEO strategies for Indianapolis businesses. Learn how to dominate local search results, optimize Google My Business, and attract more local customers.',
      keywords: ['local SEO Indianapolis', 'Indianapolis local search', 'Google My Business optimization', 'Indianapolis SEO services', 'local search marketing'],
      ogImage: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  },
  {
    slug: 'website-speed-optimization-indianapolis',
    title: 'Website Speed Optimization: Why Indianapolis Businesses Need Fast Loading Sites',
    excerpt: 'Learn why website speed is crucial for Indianapolis businesses and discover proven techniques to optimize your site for better user experience and SEO.',
    content: `# Website Speed Optimization: Why Indianapolis Businesses Need Fast Loading Sites

Website speed directly impacts your Indianapolis business success. Slow websites lose customers, hurt SEO rankings, and reduce conversions.

## Why Speed Matters for Indianapolis Businesses

Local customers expect fast, responsive websites. Studies show that 53% of mobile users abandon sites that take longer than 3 seconds to load.

## Core Web Vitals and SEO

Google uses Core Web Vitals as ranking factors, making speed optimization essential for Indianapolis businesses competing in local search.

## Image Optimization Techniques

Properly optimized images can reduce page load times by 50-80% without sacrificing visual quality.

## Code Optimization Strategies

Clean, efficient code ensures your website loads quickly across all devices and connection speeds.

## Content Delivery Networks (CDN)

CDNs help Indianapolis businesses serve content faster to users across different geographic locations.

## Conclusion

Fast websites provide better user experience, higher search rankings, and increased conversions for Indianapolis businesses.`,
    date: 'January 10, 2025',
    readTime: '6 min read',
    category: 'Technical SEO',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Mehdi Alloui',
    tags: ['website speed', 'performance optimization', 'Core Web Vitals', 'technical SEO'],
    seo: {
      metaTitle: 'Website Speed Optimization for Indianapolis Businesses | Mehdi Alloui',
      metaDescription: 'Learn why website speed is crucial for Indianapolis businesses. Discover proven techniques to optimize your site for better user experience and higher SEO rankings.',
      keywords: ['website speed optimization', 'Indianapolis web performance', 'Core Web Vitals', 'fast loading websites', 'website optimization Indianapolis'],
      ogImage: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  },
  {
    slug: 'social-media-marketing-indianapolis-businesses',
    title: 'Social Media Marketing Strategies for Indianapolis Businesses',
    excerpt: 'Effective social media marketing strategies tailored for Indianapolis businesses. Learn how to engage local customers and grow your brand online.',
    content: `# Social Media Marketing Strategies for Indianapolis Businesses

Social media marketing is essential for Indianapolis businesses looking to connect with local customers and build brand awareness in the community.

## Understanding the Indianapolis Market

Indianapolis has a unique business landscape with diverse industries from healthcare to manufacturing. Your social media strategy should reflect local culture and values.

## Platform Selection for Local Businesses

Different social platforms serve different purposes for Indianapolis businesses. Choose platforms where your target customers are most active.

## Content Strategy for Local Engagement

Create content that resonates with Indianapolis residents, including local events, community involvement, and regional interests.

## Building Community Connections

Engage with other Indianapolis businesses, local influencers, and community organizations to expand your reach.

## Measuring Social Media ROI

Track metrics that matter for your Indianapolis business, from engagement rates to actual customer conversions.

## Conclusion

Strategic social media marketing helps Indianapolis businesses build stronger community connections and drive sustainable growth.`,
    date: 'January 8, 2025',
    readTime: '7 min read',
    category: 'Digital Marketing',
    image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Mehdi Alloui',
    tags: ['social media marketing', 'Indianapolis marketing', 'local engagement', 'brand building'],
    seo: {
      metaTitle: 'Social Media Marketing for Indianapolis Businesses | Mehdi Alloui',
      metaDescription: 'Effective social media marketing strategies for Indianapolis businesses. Learn how to engage local customers, build brand awareness, and grow your business online.',
      keywords: ['social media marketing Indianapolis', 'Indianapolis social media strategy', 'local social media marketing', 'Indianapolis brand building', 'social media for businesses'],
      ogImage: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  },
  {
    slug: 'mobile-first-design-importance-indianapolis',
    title: 'Why Mobile-First Design is Critical for Indianapolis Businesses',
    excerpt: 'Understanding the importance of mobile-first design for Indianapolis businesses and how it impacts user experience, SEO, and conversions.',
    content: `# Why Mobile-First Design is Critical for Indianapolis Businesses

Mobile-first design isn't just a trend—it's essential for Indianapolis businesses competing in today's digital landscape.

## Mobile Usage Statistics in Indianapolis

Over 65% of Indianapolis residents use mobile devices as their primary way to browse the internet and search for local businesses.

## Google's Mobile-First Indexing

Google now uses mobile versions of websites for indexing and ranking, making mobile optimization crucial for Indianapolis SEO success.

## User Experience on Mobile

Indianapolis customers expect seamless mobile experiences. Poor mobile design leads to high bounce rates and lost business opportunities.

## Conversion Optimization for Mobile

Mobile-optimized websites convert better because they provide frictionless user experiences that encourage action.

## Local Search and Mobile

Most "near me" searches happen on mobile devices, making mobile optimization essential for local Indianapolis businesses.

## Conclusion

Mobile-first design is no longer optional for Indianapolis businesses—it's a necessity for online success and customer acquisition.`,
    date: 'January 5, 2025',
    readTime: '5 min read',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Mehdi Alloui',
    tags: ['mobile-first design', 'responsive design', 'mobile optimization', 'user experience'],
    seo: {
      metaTitle: 'Mobile-First Design for Indianapolis Businesses | Mehdi Alloui',
      metaDescription: 'Learn why mobile-first design is critical for Indianapolis businesses. Understand how mobile optimization impacts SEO, user experience, and conversions.',
      keywords: ['mobile-first design', 'mobile optimization Indianapolis', 'responsive web design', 'mobile SEO', 'Indianapolis web design'],
      ogImage: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  },
  {
    slug: 'content-marketing-seo-indianapolis',
    title: 'Content Marketing for SEO: A Guide for Indianapolis Businesses',
    excerpt: 'Learn how content marketing drives SEO success for Indianapolis businesses. Strategies for creating content that ranks well and converts visitors.',
    content: `# Content Marketing for SEO: A Guide for Indianapolis Businesses

Content marketing and SEO work together to help Indianapolis businesses attract qualified leads and establish industry authority.

## Content Strategy for Local Businesses

Indianapolis businesses need content strategies that address local customer needs while targeting relevant search terms.

## Keyword Research for Indianapolis Markets

Understanding what your Indianapolis customers search for helps create content that ranks well and drives qualified traffic.

## Creating Valuable Local Content

Develop content that provides genuine value to Indianapolis residents while naturally incorporating local keywords and topics.

## Content Distribution and Promotion

Publishing great content is just the beginning. Learn how to promote your content to reach more Indianapolis customers.

## Measuring Content Marketing Success

Track metrics that matter for your Indianapolis business, from organic traffic growth to lead generation and customer acquisition.

## Conclusion

Strategic content marketing helps Indianapolis businesses build authority, improve SEO rankings, and attract more qualified customers.`,
    date: 'January 3, 2025',
    readTime: '6 min read',
    category: 'Content Marketing',
    image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Mehdi Alloui',
    tags: ['content marketing', 'SEO content', 'Indianapolis marketing', 'content strategy'],
    seo: {
      metaTitle: 'Content Marketing for SEO: Indianapolis Business Guide | Mehdi Alloui',
      metaDescription: 'Learn how content marketing drives SEO success for Indianapolis businesses. Expert strategies for creating content that ranks well and converts visitors into customers.',
      keywords: ['content marketing Indianapolis', 'SEO content strategy', 'Indianapolis content marketing', 'local content marketing', 'content SEO'],
      ogImage: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  }
];

/**
 * Get all blog posts sorted by date (newest first)
 * Used for blog index page and sitemap generation
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  // Sort posts by date (newest first)
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single blog post by slug
 * Used for dynamic [slug] routes
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = blogPosts.find(post => post.slug === slug);
  return post || null;
}

/**
 * Get blog posts by category
 * Used for category filtering
 */
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

/**
 * Get blog posts by tag
 * Used for tag-based filtering
 */
export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  return blogPosts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get all unique categories
 * Used for category navigation
 */
export async function getBlogCategories(): Promise<string[]> {
  const categories = blogPosts.map(post => post.category);
  return [...new Set(categories)];
}

/**
 * Get all unique tags
 * Used for tag cloud or filtering
 */
export async function getBlogTags(): Promise<string[]> {
  const allTags = blogPosts.flatMap(post => post.tags);
  return [...new Set(allTags)];
}

/**
 * Generate structured data for blog posts (Schema.org BlogPosting)
 * Used for SEO and rich snippets
 */
export function generateBlogPostStructuredData(post: BlogPost, baseUrl: string = 'https://mehdi-alloui-portfolio.com') {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.seo.ogImage || post.image,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": baseUrl,
      "sameAs": [
        "https://linkedin.com/in/mehdi-alloui",
        "https://twitter.com/mehdi_alloui"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mehdi Alloui Web Design & SEO",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`
    },
    "keywords": post.seo.keywords.join(', '),
    "articleSection": post.category,
    "wordCount": post.content.split(' ').length,
    "timeRequired": post.readTime,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "about": {
      "@type": "Thing",
      "name": post.category
    }
  };
}

/**
 * HOW TO ADD NEW BLOG POSTS:
 * 
 * 1. Add a new object to the blogPosts array above
 * 2. Ensure the slug is unique and URL-friendly (lowercase, hyphens only)
 * 3. Fill in all required fields including SEO metadata
 * 4. The post will automatically appear on the blog index page
 * 5. A new dynamic route will be created at /blog/[your-slug]
 * 
 * EXAMPLE:
 * {
 *   slug: 'my-new-post',
 *   title: 'My New Post Title',
 *   excerpt: 'Brief description...',
 *   content: 'Full markdown content...',
 *   date: 'January 20, 2025',
 *   readTime: '4 min read',
 *   category: 'Web Design',
 *   image: 'https://images.pexels.com/...',
 *   author: 'Mehdi Alloui',
 *   tags: ['tag1', 'tag2'],
 *   seo: {
 *     metaTitle: 'SEO-optimized title...',
 *     metaDescription: 'SEO description...',
 *     keywords: ['keyword1', 'keyword2'],
 *     ogImage: 'https://images.pexels.com/...'
 *   }
 * }
 */