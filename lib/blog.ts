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
}

// Template blog posts
const blogPosts: BlogPost[] = [
  {
    slug: 'web-design-trends-2025-indianapolis',
    title: '10 Web Design Trends Indianapolis Businesses Should Follow in 2025',
    excerpt: 'Discover the latest web design trends that will help your Indianapolis business stand out online and attract more customers in 2025.',
    content: `# 10 Web Design Trends Indianapolis Businesses Should Follow in 2025

As we move into late 2025, web design continues to evolve rapidly. For Indianapolis businesses looking to stay competitive online, keeping up with the latest design trends is crucial for attracting and retaining customers.

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
    date: 'August 22, 2025',
    readTime: '10 min read',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Mehdi Alloui',
    tags: ['web design', 'trends', 'Indianapolis', 'UX design']
  },
];

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Sort posts by date (newest first)
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = blogPosts.find(post => post.slug === slug);
  return post || null;
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}