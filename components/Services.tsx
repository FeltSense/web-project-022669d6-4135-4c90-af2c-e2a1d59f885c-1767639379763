'use client';

import { motion } from 'framer-motion';
import { Flame, Heart, Users, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Flame,
    title: 'Smart Matching',
    description: 'AI-powered algorithm that learns what you love. Get better matches every day.',
  },
  {
    icon: Heart,
    title: 'Real Connections',
    description: 'Verified profiles and genuine conversations. No bots, no games.',
  },
  {
    icon: Users,
    title: 'Community Events',
    description: 'Meet matches in real life. Group hangouts, parties, and exclusive events.',
  },
  {
    icon: Sparkles,
    title: 'Premium Features',
    description: 'Unlimited likes, see who liked you, and message anyone first.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Why Choose HotMatch
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            The dating app built for real connections. Smarter matching, better conversations, genuine chemistry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-rose-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
