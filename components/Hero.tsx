import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-black to-gray-900 text-white min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-magenta-600/20 to-transparent"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-magenta-600/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-magenta-600/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-4xl">
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-magenta-600/20 text-magenta-300 px-4 py-2 rounded-full mb-8 border border-magenta-600/30 animate-fade-in-up">
            <MapPin size={16} />
            <span className="text-sm font-medium">Serving Indianapolis & Central Indiana</span>
          </div>

          {/* Main Headlines */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-200">
            Web Design & SEO Services in{' '}
            <span className="text-magenta-400 animate-pulse">Indianapolis</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
            Help your Indianapolis business grow online with modern, fast-loading websites 
            optimized for search engines and conversions.
          </p>

          {/* Introduction */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-10 animate-fade-in-up animation-delay-600 hover:bg-white/10 transition-all duration-300">
            <p className="text-gray-200 text-lg leading-relaxed">
              Hi, I'm <span className="text-magenta-400 font-semibold">Mehdi Alloui</span>, 
              a freelance web designer and digital marketing specialist based in Indianapolis. 
              I help local businesses establish a powerful online presence that drives results.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-800">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-magenta-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-magenta-700 hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-magenta-600/25"
            >
              Let's Work Together
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center animate-fade-in-up animation-delay-1000">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <div className="text-2xl font-bold text-magenta-400 mb-1">50+</div>
              <div className="text-gray-300 text-sm">Happy Clients</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <div className="text-2xl font-bold text-magenta-400 mb-1">5+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <div className="text-2xl font-bold text-magenta-400 mb-1">100%</div>
              <div className="text-gray-300 text-sm">Satisfaction Rate</div>
            </div>
          </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in-left animation-delay-600">
            <div className="relative">
              <div className="absolute inset-0 bg-magenta-600/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-magenta-600/30 shadow-2xl hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mehdi Alloui - Indianapolis Web Designer and SEO Specialist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating elements around photo */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-magenta-600 rounded-full animate-bounce animation-delay-1000"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-white rounded-full animate-bounce animation-delay-1500"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-magenta-400 rounded-full animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}