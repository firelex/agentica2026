'use client';

import { motion } from 'framer-motion';
import { Code, Trophy, Users, Clock, Zap, Gift, Award, Target } from 'lucide-react';
import Link from 'next/link';

const prizes = [
  {
    place: '1st Place',
    amount: '£10,000',
    icon: Trophy,
    color: 'from-yellow-300 to-yellow-600',
    bgColor: 'bg-gradient-to-br from-yellow-400/20 to-yellow-600/20',
    borderColor: 'border-yellow-400/50'
  },
  {
    place: '2nd Place',
    amount: '£5,000',
    icon: Award,
    color: 'from-gray-300 to-gray-500',
    bgColor: 'bg-gradient-to-br from-gray-400/20 to-gray-600/20',
    borderColor: 'border-gray-400/50'
  },
  {
    place: '3rd Place',
    amount: '£2,500',
    icon: Gift,
    color: 'from-orange-400 to-orange-600',
    bgColor: 'bg-gradient-to-br from-orange-400/20 to-orange-600/20',
    borderColor: 'border-orange-400/50'
  }
];

const hackathonDetails = [
  {
    icon: Clock,
    title: '24 Hours',
    description: 'Build your agentic AI solution from scratch'
  },
  {
    icon: Users,
    title: 'Team-Based',
    description: 'Form teams of 2-5 developers and researchers'
  },
  {
    icon: Code,
    title: 'Open Source',
    description: 'Use any frameworks, tools, and APIs you prefer'
  },
  {
    icon: Target,
    title: 'Judged Live',
    description: 'Present your solution to industry experts'
  }
];

const categories = [
  'Best Multi-Agent System',
  'Most Innovative Use Case',
  'Best Technical Implementation',
  'People\'s Choice Award'
];

export default function HackathonSection() {
  return (
    <section id="hackathon" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 space-y-4 md:space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-purple-500/30 mb-4">
            <Zap className="w-4 h-4" />
            New for 2026
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Agentic AI Hackathon
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Join the first-ever hackathon dedicated entirely to building agentic AI systems. 24 hours. £17,500 in prizes. Unlimited possibilities.
          </p>
        </motion.div>

        {/* Prize Pool */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-10">Prize Pool</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {prizes.map((prize, index) => {
              const Icon = prize.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`${prize.bgColor} backdrop-blur-sm rounded-2xl p-6 sm:p-8 border ${prize.borderColor} text-center`}
                >
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${prize.color} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{prize.place}</h4>
                  <p className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                    {prize.amount}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Hackathon Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 sm:mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {hackathonDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-10 h-10 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{detail.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{detail.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Categories & Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Award Categories */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Award Categories</h3>
            <ul className="space-y-4">
              {categories.map((category, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <span className="text-base text-gray-300">{category}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What to Build */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6">What to Build</h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-base leading-relaxed">
                Build an agentic AI system that demonstrates autonomous decision-making, goal-oriented behavior, and real-world utility.
              </p>
              <p className="text-base leading-relaxed">
                Your solution should showcase multi-agent coordination, adaptive learning, or innovative applications of agentic AI principles.
              </p>
              <p className="text-base leading-relaxed text-purple-300 font-medium">
                All code must be original work created during the 24-hour period.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-sm border border-purple-500/30 mb-12 sm:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">Hackathon Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">Day 1</div>
              <div className="text-sm text-gray-400 mb-1">18:00</div>
              <div className="text-white font-medium">Kickoff & Team Formation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">Day 2</div>
              <div className="text-sm text-gray-400 mb-1">12:00</div>
              <div className="text-white font-medium">Midpoint Check-in</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">Day 2</div>
              <div className="text-sm text-gray-400 mb-1">18:00</div>
              <div className="text-white font-medium">Submissions Close</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">Day 2</div>
              <div className="text-sm text-gray-400 mb-1">19:00</div>
              <div className="text-white font-medium">Final Presentations</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-base sm:text-lg text-gray-400 mb-6">
            Ready to build the future of agentic AI?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#register"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-purple-500/50 text-sm sm:text-base text-center"
            >
              Register for Hackathon
            </Link>
            <Link
              href="/#schedule"
              className="bg-transparent border-2 border-gray-600 text-gray-300 hover:text-white hover:border-white px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors text-sm sm:text-base text-center"
            >
              View Full Schedule
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
