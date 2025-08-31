import { MetadataRoute } from 'next';

export function GET(): Response {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://mehdi-alloui-portfolio.com/sitemap.xml

# Disallow admin or private areas (if any)
Disallow: /admin/
Disallow: /private/

# Allow all search engines to crawl the site
User-agent: *
Crawl-delay: 1

# Specific rules for major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Block AI training crawlers (optional)
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Claude-Web
Disallow: /`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}