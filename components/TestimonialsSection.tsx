import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Indianapolis Restaurant Group',
    role: 'Marketing Director',
    content: 'Mehdi transformed our online presence completely. Our website traffic increased by 200% and we\'re getting more local customers than ever before.',
    rating: 5,
    location: 'Indianapolis, IN',
  },
  {
    name: 'Mike Rodriguez',
    company: 'Central Indiana Auto',
    role: 'Business Owner',
    content: 'The SEO work Mehdi did for our auto dealership brought us to the top of Google searches. We\'re now the #1 result for "auto dealer Indianapolis".',
    rating: 5,
    location: 'Indianapolis, IN',
  },
  {
    name: 'Jennifer Smith',
    company: 'Smith & Associates Law',
    role: 'Managing Partner',
    content: 'Professional, responsive, and results-driven. Our new website looks amazing and generates quality leads for our law practice.',
    rating: 5,
    location: 'Carmel, IN',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Indianapolis Businesses Say About <span className="text-magenta-400">My Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real Indianapolis businesses that trusted me with their online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center mb-6">
                <Quote size={24} className="text-magenta-400 mr-3 flex-shrink-0" />
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-gray-200 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="border-t border-white/20 pt-6">
                <h4 className="font-semibold text-white mb-1">{testimonial.name}</h4>
                <p className="text-magenta-400 font-medium mb-1">{testimonial.role}</p>
                <p className="text-gray-300 text-sm">{testimonial.company}</p>
                <p className="text-gray-400 text-xs mt-1">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-magenta-600/20 text-magenta-300 px-6 py-3 rounded-full border border-magenta-600/30">
            <Star size={20} className="text-yellow-400 fill-current mr-2" />
            <span className="font-semibold">5.0/5.0 Average Rating</span>
            <span className="mx-2">•</span>
            <span>50+ Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}