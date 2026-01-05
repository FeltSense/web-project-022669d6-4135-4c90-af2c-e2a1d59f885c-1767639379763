'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Unlimited profile swipes',
  'See who liked you first',
  'Advanced matching algorithm',
  'Priority message delivery',
  'Video chat verification',
  'Ad-free experience',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Join HotMatch Premium
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Get exclusive features and start matching with your perfect connection today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-all duration-300"
        >
          <div className="inline-block bg-rose-50 text-rose-600 text-sm font-semibold px-4 py-2 rounded-lg mb-6">
            Most Popular
          </div>

          <div className="mb-8">
            <span className="text-5xl font-bold text-slate-900">$29</span>
            <span className="text-slate-500 ml-2">lifetime access</span>
          </div>
          
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Pre-Order Now - $29
          </button>

          <p className="text-center text-slate-500 text-sm mt-6">
            Limited-time offer. Early access for founders.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
