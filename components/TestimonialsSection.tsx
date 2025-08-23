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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Client Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from Indianapolis businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-black mb-1">{testimonial.name}</h4>
                <p className="text-magenta-600 font-medium mb-1">{testimonial.role}</p>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center text-magenta-300 px-6 py-3 rounded-full border border-magenta-600/30">
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