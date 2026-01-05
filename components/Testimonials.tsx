'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Matched in 3 weeks',
    quote: 'HotMatch completely changed how I approach dating. The smart matching algorithm actually works—I met someone incredible within my first month. Best app I\'ve ever used.',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Marcus Williams',
    role: 'Premium member',
    quote: 'The quality of matches is insane. Everyone on HotMatch seems genuinely interested in finding something real. I\'ve had more meaningful conversations here than anywhere else.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Found her person',
    quote: 'I was skeptical at first, but the vibe is completely different. No games, no ghosting—just real people looking for real connections. Couldn\'t be happier.',
    avatar: 'https://i.pravatar.cc/150?img=68',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Real connections. Real results.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Join thousands of people who found their match on HotMatch
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start mb-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-rose-500 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-cyan-400">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}