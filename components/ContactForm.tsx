'use client';

import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Persist success state in localStorage to survive RSC re-renders
  useEffect(() => {
    const saved = localStorage.getItem('form_submitted');
    if (saved === 'true') setStatus('success');
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_id: 'contact_form',
          form_data: data,
          project_id: '022669d6-4135-4c90-af2c-e2a1d59f885c',
          founder_id: 'a0a0a0a0-b1b1-c2c2-d3d3-e4e4e4e4e4e4',
        }),
      });

      if (response.ok) {
        localStorage.setItem('form_submitted', 'true');
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white mb-4">Ready to find your match?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Join thousands of singles discovering real connections. Sign up in seconds and start matching today.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          {status === 'success' ? (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-rose-500" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">You're all set!</h3>
              <p className="text-slate-500">Check your email for next steps. Welcome to HotMatch!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900">Full Name</label>
                <input type="text" id="name" name="name" required className="w-full rounded-xl border border-slate-200 focus:ring-2 py-4 px-5 focus:border-rose-500 focus:ring-rose-500 text-slate-900 placeholder-slate-400 transition-all duration-300" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900">Email Address</label>
                <input type="email" id="email" name="email" required className="w-full rounded-xl border border-slate-200 focus:ring-2 py-4 px-5 focus:border-rose-500 focus:ring-rose-500 text-slate-900 placeholder-slate-400 transition-all duration-300" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full rounded-xl border border-slate-200 focus:ring-2 py-4 px-5 focus:border-rose-500 focus:ring-rose-500 text-slate-900 placeholder-slate-400 transition-all duration-300" placeholder="+1 (555) 000-0000" />
              </div>
              <button type="submit" disabled={status === 'loading'} className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'loading' ? 'Submitting...' : 'Get Started'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}