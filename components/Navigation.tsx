'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-white tracking-tight">
            Hot<span className="text-rose-500">Match</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-slate-400 hover:text-white transition-colors duration-300 font-medium text-sm"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-6 py-2.5 transition-all duration-300 shadow-sm hover:shadow-md text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white hover:text-rose-500 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 bg-slate-900">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="block py-3 text-slate-400 hover:text-white transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              onClick={() => setIsOpen(false)} 
              className="block mt-4 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-6 py-2.5 transition-all duration-300 text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
