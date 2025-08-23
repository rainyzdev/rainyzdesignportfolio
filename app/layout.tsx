import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Web Design & SEO Services in Indianapolis | Mehdi Alloui Portfolio',
  description: 'Affordable web design, SEO, and marketing services for Indianapolis businesses. Work with Mehdi Alloui to grow your online presence with fast, mobile-friendly websites.',
  keywords: 'web design Indianapolis, SEO Indianapolis, digital marketing Indianapolis, website development Indiana, Indianapolis web designer, local SEO services',
  authors: [{ name: 'Mehdi Alloui' }],
  creator: 'Mehdi Alloui',
  publisher: 'Mehdi Alloui',
  robots: 'index, follow',
  openGraph: {
    title: 'Web Design & SEO Services in Indianapolis | Mehdi Alloui',
    description: 'Professional web design, SEO optimization, and digital marketing services for Indianapolis businesses.',
    url: 'https://mehdi-alloui-portfolio.com',
    siteName: 'Mehdi Alloui Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & SEO Services in Indianapolis | Mehdi Alloui',
    description: 'Professional web design, SEO optimization, and digital marketing services for Indianapolis businesses.',
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Mehdi Alloui Web Design & SEO",
              "description": "Professional web design, SEO, and digital marketing services for Indianapolis businesses",
              "url": "https://mehdi-alloui-portfolio.com",
              "telephone": "+1-317-555-0123",
              "email": "mehdi@example.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "Indianapolis",
                "addressRegion": "IN",
                "postalCode": "46201",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.7684,
                "longitude": -86.1581
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Indianapolis",
                  "containedIn": {
                    "@type": "State",
                    "name": "Indiana"
                  }
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 39.7684,
                  "longitude": -86.1581
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Design & Digital Marketing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Design & Development",
                      "description": "Custom website design and development services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO Optimization",
                      "description": "Search engine optimization and local SEO services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Digital Marketing",
                      "description": "Marketing and branding services for businesses"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}