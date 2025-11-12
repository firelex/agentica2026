'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Users, Building, Zap, LucideIcon } from 'lucide-react';
import RegistrationModal from '@/components/forms/RegistrationModal';

interface PricingTier {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: LucideIcon;
  buttonText: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Early Bird",
    price: "£399",
    originalPrice: "£549",
    description: "Perfect for individual attendees",
    icon: Users,
    buttonText: "Register Now",
    features: [
      "Full 2-day conference access",
      "All keynotes and panels",
      "Workshop participation",
      "Networking events",
      "Conference materials",
      "Lunch & refreshments",
      "Digital certificate"
    ]
  },
  {
    name: "Professional",
    price: "£699",
    description: "Ideal for industry professionals",
    icon: Building,
    popular: true,
    buttonText: "Most Popular",
    features: [
      "Everything in Early Bird",
      "VIP seating at keynotes",
      "Exclusive speaker meet & greets",
      "Priority workshop registration",
      "Premium networking dinner",
      "One-on-one mentor sessions",
      "Conference recording access",
      "LinkedIn certificate"
    ]
  },
  {
    name: "Enterprise",
    price: "£999",
    description: "For teams and organizations",
    icon: Zap,
    buttonText: "Contact Sales",
    features: [
      "Everything in Professional",
      "Reserved team seating",
      "Private company showcase",
      "Custom workshop sessions",
      "Dedicated account manager",
      "Post-event consultation",
      "Bulk registration discounts",
      "Corporate partnership opportunities"
    ]
  }
];

const PricingCard = ({ tier, index, onRegister }: { tier: PricingTier; index: number; onRegister: (ticket: string) => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`relative p-6 sm:p-8 rounded-2xl backdrop-blur-sm border ${
      tier.popular
        ? 'border-blue-500 bg-blue-600/10'
        : 'border-gray-700 bg-gray-800/50'
    }`}
  >
    {tier.popular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <div className="bg-blue-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1">
          <Star className="w-3 h-3 sm:w-4 sm:h-4" />
          Most Popular
        </div>
      </div>
    )}

    <div className="text-center mb-6 sm:mb-8 space-y-3 sm:space-y-4">
      <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center ${
        tier.popular ? 'bg-blue-600/20' : 'bg-gray-700/50'
      }`}>
        <tier.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${tier.popular ? 'text-blue-400' : 'text-gray-400'}`} />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-white">{tier.name}</h3>
      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{tier.description}</p>

      <div>
        {tier.originalPrice && (
          <span className="text-gray-500 line-through text-base sm:text-lg mr-2">{tier.originalPrice}</span>
        )}
        <span className="text-3xl sm:text-4xl font-bold text-white">{tier.price}</span>
        <span className="text-sm sm:text-base text-gray-400 ml-1">/person</span>
      </div>
    </div>

    <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
      {tier.features.map((feature, featureIndex) => (
        <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" />
          <span className="text-sm sm:text-base text-gray-300 leading-relaxed">{feature}</span>
        </li>
      ))}
    </ul>

    <button
      onClick={() => onRegister(tier.name.toLowerCase().replace(' ', '-'))}
      className={`w-full py-3 sm:py-4 px-6 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
        tier.popular
          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/50'
          : 'bg-gray-700 hover:bg-gray-600 text-white'
      }`}
    >
      {tier.buttonText}
    </button>
  </motion.div>
);

export default function RegistrationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<string>('professional');

  const handleRegisterClick = (ticket: string) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  return (
    <>
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedTicket={selectedTicket}
      />

      <section id="register" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 space-y-4 md:space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Reserve Your Spot
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Choose the registration tier that best fits your needs. Early bird pricing available for a limited time.
          </p>
          <div className="inline-flex items-center gap-2 bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
            <Zap className="w-4 h-4 flex-shrink-0" />
            Early Bird: Save £150 - Limited Time Only
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} index={index} onRegister={handleRegisterClick} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 max-w-2xl mx-auto border border-gray-700 space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Group Discounts Available</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Bringing a team? Contact us for special group pricing and custom packages.
            </p>
            <div className="text-gray-400 text-xs sm:text-sm space-y-2">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="mailto:abournewilliams@agentica2026.com?subject=Group Registration Inquiry - Agentica 2026"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors text-center text-sm sm:text-base shadow-lg hover:shadow-blue-500/50"
              >
                Contact Sales
              </a>
              <button className="bg-transparent border-2 border-gray-600 text-gray-300 hover:text-white hover:border-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors text-sm sm:text-base">
                View FAQ
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}