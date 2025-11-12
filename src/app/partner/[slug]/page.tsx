'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { ArrowLeft, Building2, Globe, Mail, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

interface PartnerDetail {
  id: string;
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  description: string;
  longDescription: string;
  logo: string;
  website?: string;
  industry: string;
  location: string;
  size?: string;
  offerings: string[];
  commitment: string;
  contact?: {
    email?: string;
    website?: string;
  };
}

const partners: Record<string, PartnerDetail> = {
  'wsd': {
    id: 'wsd',
    name: 'WSD',
    tier: 'platinum',
    description: 'Leading legal technology and document automation for structured products and derivatives',
    longDescription: `WSD is a leading legal technology and services company specializing in document automation and process optimization for the structured products and derivatives industry. Since its inception in 2009, WSD has become a trusted technology partner to global investment banks, helping them automate the drafting, approval, and publication of complex legal and regulatory documentation.

Its platform suite includes solutions for end-to-end automation of term sheets, pricing supplements, PRIIP KIDs, regulatory filings, and lifecycle events. WSD\'s technology integrates directly with banks\' trading, legal, and compliance systems to deliver straight-through processing, reduced operational risk, and faster time-to-market.

In 2022, WSD joined the Bowmark Capital portfolio, accelerating its growth and investment in innovation. Today, the company operates globally, supporting leading financial institutions with scalable, secure, and compliant automation that underpins the next generation of AI-enabled legal and regulatory workflows.`,
    logo: '/partners/wsd.svg',
    website: 'https://www.wsd.com',
    industry: 'Legal Technology & Financial Services',
    location: 'London, United Kingdom',
    size: 'Growing under Bowmark Capital',
    offerings: [
      'Term sheets and pricing supplements automation',
      'PRIIP KIDs generation and management',
      'Regulatory filing automation',
      'Lifecycle events processing',
      'Straight-through processing integration'
    ],
    commitment: 'As a Platinum Partner, WSD continues to lead innovation in legal technology for financial services. The company\'s founder, Mathias Strasser, will share insights from WSD\'s journey automating complex derivatives documentation and demonstrate how this experience is shaping the future of agentic AI in regulated industries.',
    contact: {
      email: 'info@wsd.com',
      website: 'https://www.wsd.com'
    }
  },
  'sample-partner-gold': {
    id: 'sample-partner-gold',
    name: 'Partner Name TBA',
    tier: 'gold',
    description: 'Gold partnership details to be announced',
    longDescription: `Partner details will be announced soon. We are in discussions with leading organizations in the AI and technology space to bring you exceptional value at Agentica2026.

Gold Partners receive prominent placement across conference materials, speaking opportunities, and direct access to attendees through workshops and networking events.

Stay tuned for updates as we finalize our partnership roster.`,
    logo: '/partners/partner-tba.svg',
    industry: 'To Be Announced',
    location: 'To Be Announced',
    offerings: [
      'Partnership details to be announced'
    ],
    commitment: 'Gold Partner benefits include technical workshop sponsorship, expo hall presence, and networking opportunities with conference attendees.'
  }
};

const getTierConfig = (tier: string) => {
  switch (tier) {
    case 'platinum':
      return {
        label: 'Platinum Partner',
        color: 'from-gray-300 to-gray-100',
        bgColor: 'bg-gradient-to-br from-gray-400/20 to-gray-600/20',
        borderColor: 'border-gray-400/50',
        badgeColor: 'bg-gray-400/20 text-gray-300 border-gray-400/50'
      };
    case 'gold':
      return {
        label: 'Gold Partner',
        color: 'from-yellow-300 to-yellow-600',
        bgColor: 'bg-gradient-to-br from-yellow-400/20 to-yellow-600/20',
        borderColor: 'border-yellow-400/50',
        badgeColor: 'bg-yellow-400/20 text-yellow-300 border-yellow-400/50'
      };
    case 'silver':
      return {
        label: 'Silver Partner',
        color: 'from-blue-300 to-blue-500',
        bgColor: 'bg-gradient-to-br from-blue-400/20 to-blue-600/20',
        borderColor: 'border-blue-400/50',
        badgeColor: 'bg-blue-400/20 text-blue-300 border-blue-400/50'
      };
    case 'bronze':
      return {
        label: 'Bronze Partner',
        color: 'from-orange-400 to-orange-600',
        bgColor: 'bg-gradient-to-br from-orange-400/20 to-orange-600/20',
        borderColor: 'border-orange-400/50',
        badgeColor: 'bg-orange-400/20 text-orange-300 border-orange-400/50'
      };
    default:
      return {
        label: 'Partner',
        color: 'from-gray-300 to-gray-500',
        bgColor: 'bg-gray-800/50',
        borderColor: 'border-gray-700',
        badgeColor: 'bg-gray-700/50 text-gray-300 border-gray-600'
      };
  }
};

export default function PartnerPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const partner = partners[slug];

  if (!partner) {
    return (
      <main className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
        <div className="text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Partner Not Found</h1>
          <p className="text-gray-400">The partner you're looking for doesn't exist.</p>
          <Link
            href="/#partners"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Back to Partners
          </Link>
        </div>
      </main>
    );
  }

  const tierConfig = getTierConfig(partner.tier);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between py-4 sm:py-5">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
              Agentica<span className="text-blue-400">2026</span>
            </Link>
            <Link
              href="/#partners"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Conference</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 md:pb-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Partner Header */}
            <div className={`${tierConfig.bgColor} backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border ${tierConfig.borderColor} mb-8 sm:mb-12`}>
              <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                {/* Logo Placeholder */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-gray-900/50 border border-gray-700 flex items-center justify-center">
                  <Building2 className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400" aria-label={`${partner.name} logo`} />
                </div>

                {/* Partner Info */}
                <div className="space-y-3">
                  <div className={`inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border ${tierConfig.badgeColor}`}>
                    {tierConfig.label}
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                    {partner.name}
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-300">
                    {partner.description}
                  </p>
                </div>

                {/* Quick Info */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-400 pt-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" aria-hidden="true" />
                    <span>{partner.industry}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    <span>{partner.location}</span>
                  </div>
                  {partner.size && (
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" aria-hidden="true" />
                      <span>{partner.size}</span>
                    </div>
                  )}
                </div>

                {/* Contact Links */}
                {partner.contact && (
                  <div className="flex items-center gap-4 pt-2">
                    {partner.contact.website && (
                      <a
                        href={partner.contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 text-sm sm:text-base"
                      >
                        <Globe className="w-4 h-4" />
                        <span>Visit Website</span>
                      </a>
                    )}
                    {partner.contact.email && (
                      <a
                        href={`mailto:${partner.contact.email}`}
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 text-sm sm:text-base"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="hidden sm:inline">Contact</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* About Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">About</h2>
              <div className="prose prose-invert max-w-none space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                {partner.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.section>

            {/* Offerings */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Products & Services
              </h2>
              <ul className="space-y-3">
                {partner.offerings.map((offering, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300 leading-relaxed">{offering}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Conference Commitment */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 sm:p-8 border border-blue-500/30 mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Agentica2026 Partnership
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {partner.commitment}
              </p>
            </motion.section>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center space-y-6"
            >
              <p className="text-base sm:text-lg text-gray-400">
                Interested in becoming a partner?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:abournewilliams@agentica2026.com?subject=Partnership Inquiry"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-blue-500/50 text-sm sm:text-base text-center"
                >
                  Become a Partner
                </a>
                <Link
                  href="/#partners"
                  className="bg-transparent border-2 border-gray-600 text-gray-300 hover:text-white hover:border-white px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors text-sm sm:text-base text-center"
                >
                  View All Partners
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
