'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-4 sm:py-5">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
            Agentica<span className="text-blue-400">2026</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
              About
            </Link>
            <Link href="#speakers" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
              Speakers
            </Link>
            <Link href="#partners" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
              Partners
            </Link>
            <Link href="#schedule" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
              Schedule
            </Link>
            <Link href="#hackathon" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
              Hackathon
            </Link>
            <Link href="#register" className="bg-blue-600 hover:bg-blue-700 text-white px-5 lg:px-6 py-2 lg:py-2.5 rounded-full transition-colors text-sm lg:text-base shadow-lg hover:shadow-blue-500/50">
              Register
            </Link>
          </nav>

          <button
            className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="#speakers" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Speakers
              </Link>
              <Link href="#partners" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Partners
              </Link>
              <Link href="#schedule" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Schedule
              </Link>
              <Link href="#hackathon" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Hackathon
              </Link>
              <Link href="#register" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors inline-block text-center mt-2 shadow-lg" onClick={() => setIsMenuOpen(false)}>
                Register
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}