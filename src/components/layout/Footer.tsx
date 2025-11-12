import Link from 'next/link';
import { Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Agentica<span className="text-blue-400">2026</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              The premier conference for agentic AI professionals, researchers, and enthusiasts. 
              Join us for cutting-edge insights and networking opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#speakers" className="text-gray-400 hover:text-white transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="#partners" className="text-gray-400 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="text-gray-400 hover:text-white transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#register" className="text-gray-400 hover:text-white transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:abournewilliams@agentica2026.com" className="hover:text-white transition-colors">
                  abournewilliams@agentica2026.com
                </a>
              </li>
              <li>
                <a href="tel:+447900410582" className="hover:text-white transition-colors">
                  +44 7900 410 582
                </a>
              </li>
              <li>London, UK</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Agentica2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}