import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmad N.',
    company: 'Safar Kitchen',
    role: 'Partner',
    content: 'Mehdi completely transformed our website! He was incredibly communicative, knowledgeable, and transparent, and everyone on our team has been impressed with the results.',
    rating: 5,
    location: 'Muncie, IN',
  },
  {
    name: 'Abdelrahman E.',
    company: 'Outdoor Oasis',
    role: 'Business Owner',
    content: 'Working with Mehdi was a great experience! He built us a clean, modern website that makes our business look professional and gives us a solid presence online. It’s exactly what we needed to put our company on the map.',
    rating: 5,
    location: 'Pottstown, PA',
  },
  {
    name: 'Kaiden M.',
    company: 'KB Detailing',
    role: 'Managing Partner',
    content: 'Mehdi was great to work with. He built a clean, modern website that really feels like us, and he even integrated a booking system that makes managing leads so much easier. It’s simple, professional, and finally gives our business a proper presence online',
    rating: 5,
    location: 'Muncie, IN',
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
            Real results from real businesses.
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
          </div>
        </div>
      </div>
    </section>
  );
}