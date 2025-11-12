'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from '@/components/ui/CountdownTimer';
import { Calendar, MapPin, Users } from 'lucide-react';
import RegistrationModal from '@/components/forms/RegistrationModal';
import Link from 'next/link';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const conferenceDate = new Date('2026-06-01T09:00:00');

  return (
    <>
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedTicket="professional"
      />

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20 md:py-0"
        aria-label="Hero section - Agentica2026 conference information"
      >
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-40"
          poster="/video-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
          {/* Fallback for browsers that don't support video */}
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-blue-900/50 to-purple-900/60" aria-hidden="true"></div>

      {/* Additional gradient orbs for depth */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 md:space-y-12"
        >
          <header className="space-y-4 md:space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Agentica<span className="text-blue-400">2026</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The Premier Conference on Agentic AI
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
              Join leaders, researchers, and innovators shaping the future of autonomous AI systems
            </p>
          </header>

          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base md:text-lg text-gray-300 px-4">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" aria-hidden="true" />
              <span>Summer 2026</span>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" aria-hidden="true" />
              <span>London, United Kingdom</span>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" aria-hidden="true" />
              <span>500+ Expected Attendees</span>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">Conference Starts In</h2>
            <CountdownTimer targetDate={conferenceDate} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 pt-4">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold transition-colors shadow-lg hover:shadow-blue-500/50 w-full sm:w-auto"
            >
              Register Now
            </motion.button>
            <Link href="/#schedule">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold transition-colors w-full sm:w-auto"
              >
                View Schedule
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}