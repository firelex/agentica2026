'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Lightbulb, Target, Award, Globe } from 'lucide-react';
import RegistrationModal from '@/components/forms/RegistrationModal';
import Link from 'next/link';

const features = [
  {
    icon: Brain,
    title: "Cutting-Edge Research",
    description: "Discover the latest breakthroughs in agentic AI from leading researchers worldwide"
  },
  {
    icon: Users,
    title: "Industry Leaders",
    description: "Connect with executives and engineers building the future of autonomous AI systems"
  },
  {
    icon: Lightbulb,
    title: "Practical Insights",
    description: "Learn actionable strategies for implementing AI agents in your organization"
  },
  {
    icon: Target,
    title: "Focused Content",
    description: "Deep dive into specific aspects of agentic AI without surface-level overviews"
  },
  {
    icon: Award,
    title: "Premium Content",
    description: "Experience carefully curated sessions and workshops from industry pioneers"
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Join a worldwide network of AI professionals and researchers"
  }
];

const stats = [
  { number: "500+", label: "Expected Attendees" },
  { number: "30+", label: "Sessions & Workshops" },
  { number: "20+", label: "Tech Companies" },
  { number: "2", label: "Days of Content" }
];

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedTicket="professional"
      />

      <section id="about" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 md:space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            About Agentica2026
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Agentica2026 is the premier conference dedicated to agentic AI - autonomous systems that can
            plan, reason, and act independently to achieve complex goals. Join us for two days of
            groundbreaking insights, practical workshops, and unparalleled networking opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-12 sm:mb-16 md:mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 sm:p-8 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 hover:bg-gray-900/70 transition-all duration-300 group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-sm border border-gray-700 mb-12 sm:mb-16 md:mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center space-y-6 md:space-y-8"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Why Agentic AI Matters</h3>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            As AI systems become more sophisticated, the ability to create autonomous agents that can
            operate independently while maintaining alignment with human goals becomes crucial.
            Agentica2026 brings together the brightest minds working on these challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-blue-500/50 w-full sm:w-auto"
            >
              Register Now
            </button>
            <Link href="/#schedule">
              <button className="bg-transparent border-2 border-gray-600 text-gray-300 hover:text-white hover:border-white px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors w-full sm:w-auto">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}