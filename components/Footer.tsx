import Link from 'next/link';
import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Mehdi Alloui</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional web design, SEO optimization, and digital marketing services 
              for Indianapolis businesses. Helping local companies grow their online presence 
              with modern, fast-loading websites.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/mehdi-alloui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-magenta-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/mehdi_alloui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-magenta-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://instagram.com/mehdi_alloui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-magenta-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-magenta-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-magenta-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-magenta-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-magenta-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-magenta-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Indianapolis, Indiana<br />
                  Serving Central Indiana
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-magenta-400 flex-shrink-0" />
                <a 
                  href="mailto:mehdi@example.com"
                  className="text-gray-300 hover:text-magenta-400 transition-colors text-sm"
                >
                  mehdi@example.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-magenta-400 flex-shrink-0" />
                <a 
                  href="tel:+13175550123"
                  className="text-gray-300 hover:text-magenta-400 transition-colors text-sm"
                >
                  (317) 555-0123
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Mehdi Alloui. All rights reserved. | 
            <span className="ml-1">Web Design & SEO Services in Indianapolis, Indiana</span>
          </p>
        </div>
      </div>
    </footer>
  );
}