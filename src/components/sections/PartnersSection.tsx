'use client';

import { motion } from 'framer-motion';
import { Building2, Sparkles, Trophy } from 'lucide-react';
import Link from 'next/link';

interface Partner {
  id: string;
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  description: string;
}

const partners: Partner[] = [
  // Platinum Partners
  {
    id: "wsd",
    name: "WSD",
    tier: "platinum",
    description: "Leading legal technology for structured products and derivatives"
  },
  {
    id: "partner-tba-platinum-2",
    name: "Partner Name TBA",
    tier: "platinum",
    description: "Premium partnership details to be announced"
  },

  // Gold Partners
  {
    id: "sample-partner-gold",
    name: "Partner Name TBA",
    tier: "gold",
    description: "Gold partnership details to be announced"
  },
  {
    id: "partner-tba-gold-2",
    name: "Partner Name TBA",
    tier: "gold",
    description: "Gold partnership details to be announced"
  },
  {
    id: "partner-tba-gold-3",
    name: "Partner Name TBA",
    tier: "gold",
    description: "Gold partnership details to be announced"
  },

  // Silver Partners
  {
    id: "partner-tba-silver-1",
    name: "Partner Name TBA",
    tier: "silver",
    description: "Silver partnership details to be announced"
  },
  {
    id: "partner-tba-silver-2",
    name: "Partner Name TBA",
    tier: "silver",
    description: "Silver partnership details to be announced"
  },
  {
    id: "partner-tba-silver-3",
    name: "Partner Name TBA",
    tier: "silver",
    description: "Silver partnership details to be announced"
  },
  {
    id: "partner-tba-silver-4",
    name: "Partner Name TBA",
    tier: "silver",
    description: "Silver partnership details to be announced"
  },

  // Bronze Partners
  {
    id: "partner-tba-bronze-1",
    name: "Partner Name TBA",
    tier: "bronze",
    description: "Bronze partnership details to be announced"
  },
  {
    id: "partner-tba-bronze-2",
    name: "Partner Name TBA",
    tier: "bronze",
    description: "Bronze partnership details to be announced"
  },
  {
    id: "partner-tba-bronze-3",
    name: "Partner Name TBA",
    tier: "bronze",
    description: "Bronze partnership details to be announced"
  },
  {
    id: "partner-tba-bronze-4",
    name: "Partner Name TBA",
    tier: "bronze",
    description: "Bronze partnership details to be announced"
  },
  {
    id: "partner-tba-bronze-5",
    name: "Partner Name TBA",
    tier: "bronze",
    description: "Bronze partnership details to be announced"
  },
  {
    id: "partner-tba-bronze-6",
    name: "Partner Name TBA",
    tier: "bronze",
    description: "Bronze partnership details to be announced"
  }
];

const getTierConfig = (tier: string) => {
  switch (tier) {
    case 'platinum':
      return {
        icon: Trophy,
        label: 'Platinum Partner',
        color: 'from-gray-300 to-gray-100',
        bgColor: 'bg-gradient-to-br from-gray-400/20 to-gray-600/20',
        borderColor: 'border-gray-400/50',
        iconColor: 'text-gray-300'
      };
    case 'gold':
      return {
        icon: Sparkles,
        label: 'Gold Partner',
        color: 'from-yellow-300 to-yellow-600',
        bgColor: 'bg-gradient-to-br from-yellow-400/20 to-yellow-600/20',
        borderColor: 'border-yellow-400/50',
        iconColor: 'text-yellow-400'
      };
    case 'silver':
      return {
        icon: Building2,
        label: 'Silver Partner',
        color: 'from-blue-300 to-blue-500',
        bgColor: 'bg-gradient-to-br from-blue-400/20 to-blue-600/20',
        borderColor: 'border-blue-400/50',
        iconColor: 'text-blue-400'
      };
    case 'bronze':
      return {
        icon: Building2,
        label: 'Bronze Partner',
        color: 'from-orange-400 to-orange-600',
        bgColor: 'bg-gradient-to-br from-orange-400/20 to-orange-600/20',
        borderColor: 'border-orange-400/50',
        iconColor: 'text-orange-400'
      };
    default:
      return {
        icon: Building2,
        label: 'Partner',
        color: 'from-gray-300 to-gray-500',
        bgColor: 'bg-gray-800/50',
        borderColor: 'border-gray-700',
        iconColor: 'text-gray-400'
      };
  }
};

const PartnerCard = ({ partner, index }: { partner: Partner; index: number }) => {
  const config = getTierConfig(partner.tier);
  const Icon = config.icon;
  const hasDetailPage = partner.id === 'wsd' || partner.id.startsWith('sample-partner');

  const content = (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group cursor-pointer h-full"
    >
      <div className={`${config.bgColor} backdrop-blur-sm rounded-xl p-5 sm:p-6 h-full border ${config.borderColor} hover:scale-105 transition-all duration-300`}>
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${config.bgColor} flex items-center justify-center border ${config.borderColor}`}>
            <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${config.iconColor}`} aria-hidden="true" />
          </div>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${config.iconColor} bg-gray-900/50`}>
            {config.label}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-300 transition-colors">
          {partner.name}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{partner.description}</p>
      </div>
    </motion.article>
  );

  if (hasDetailPage) {
    return <Link href={`/partner/${partner.id}`}>{content}</Link>;
  }

  return content;
};

export default function PartnersSection() {
  return (
    <section id="partners" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 space-y-4 md:space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Our Partners
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Agentica2026 is proud to be supported by leading organizations in AI and technology
          </p>
        </motion.div>

        {/* Platinum Partners */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-300 mb-6 sm:mb-8 text-center">Platinum Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {partners.filter(p => p.tier === 'platinum').map((partner, index) => (
              <PartnerCard key={`${partner.tier}-${index}`} partner={partner} index={index} />
            ))}
          </div>
        </div>

        {/* Gold Partners */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-300 mb-6 sm:mb-8 text-center">Gold Partners</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {partners.filter(p => p.tier === 'gold').map((partner, index) => (
              <PartnerCard key={`${partner.tier}-${index}`} partner={partner} index={index} />
            ))}
          </div>
        </div>

        {/* Silver Partners */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-300 mb-6 sm:mb-8 text-center">Silver Partners</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {partners.filter(p => p.tier === 'silver').map((partner, index) => (
              <PartnerCard key={`${partner.tier}-${index}`} partner={partner} index={index} />
            ))}
          </div>
        </div>

        {/* Bronze Partners */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-300 mb-6 sm:mb-8 text-center">Bronze Partners</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {partners.filter(p => p.tier === 'bronze').map((partner, index) => (
              <PartnerCard key={`${partner.tier}-${index}`} partner={partner} index={index} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-sm border border-gray-700 max-w-2xl mx-auto space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Become a Partner</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Join us in shaping the future of agentic AI. Partnership opportunities available for organizations of all sizes.
            </p>
            <div className="text-gray-300 text-xs sm:text-sm space-y-2">
              <p>
                <strong>Contact us:</strong>
              </p>
              <p>
                <a href="mailto:abournewilliams@agentica2026.com" className="text-blue-400 hover:text-blue-300 transition-colors break-all">
                  abournewilliams@agentica2026.com
                </a>
              </p>
              <p>
                <a href="tel:+447900410582" className="text-blue-400 hover:text-blue-300 transition-colors">
                  +44 7900 410 582
                </a>
              </p>
            </div>
            <a
              href="mailto:abournewilliams@agentica2026.com?subject=Partnership Inquiry - Agentica 2026"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors text-sm sm:text-base shadow-lg hover:shadow-blue-500/50"
            >
              Send Partnership Inquiry
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
