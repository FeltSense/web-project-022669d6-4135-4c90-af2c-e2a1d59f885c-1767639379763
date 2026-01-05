'use client';

import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  support: [
    { name: 'Contact', href: '#contact' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-24 md:py-32 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight mb-4 inline-block">
              Hot<span className="text-rose-500">Match</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Connect with someone special. Premium matching for modern dating.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:border-rose-500 hover:bg-rose-50/5 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-rose-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-rose-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-5 h-5 text-rose-500" />
              <span className="text-white font-semibold text-sm">Ready to Match?</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Join thousands finding their perfect match.
            </p>
            <Link
              href="#contact"
              className="inline-block w-full text-center bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} HotMatch. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-slate-500 text-sm hover:text-rose-500 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-500 text-sm hover:text-rose-500 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-500 text-sm hover:text-rose-500 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div></div>
    </footer>
  </div></div>);
}
