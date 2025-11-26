'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ProposalModal from '@/components/forms/ProposalModal';

interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    id: "mathias-strasser",
    name: "Mathias Strasser",
    title: "Founder & CEO",
    company: "Scissero",
    bio: "Pioneer in AI-powered legal technology and document automation, building the future of intelligent legal workflows.",
    image: "/speakers/mathias-strasser.jpg"
  },
  {
    id: "lawrence-lessig",
    name: "Lawrence Lessig",
    title: "Roy L. Furman Professor of Law and Leadership",
    company: "Harvard Law School",
    bio: "World-renowned legal scholar and thought leader shaping the intersection of law, technology, and democracy.",
    image: "/speakers/lawrence-lessig.jpg"
  },
  {
    id: "christian-nentwich",
    name: "Christian Nentwich",
    title: "Venture Partner for AI",
    company: "13books",
    bio: "Serial entrepreneur and technologist with a track record of building category-defining enterprise software companies.",
    image: "/speakers/christian-nentwich.jpg"
  },
  // {
  //   id: "jay-phipps",
  //   name: "Jay Phipps",
  //   title: "Senior Director Analyst, National Defense and Security",
  //   company: "Gartner",
  //   bio: "Technology and defense expert bridging federal service and strategic advisory with deep experience in defense intelligence systems.",
  //   image: "/speakers/jay-phipps.jpg"
  // },
  {
    id: "ben-hollowood",
    name: "Ben Hollowood",
    title: "Partner",
    company: "Bowmark Capital",
    bio: "Private equity leader driving portfolio management and value creation through strategic growth and digital transformation.",
    image: "/speakers/ben-hollowood.jpg"
  },
  {
    id: "frances-weston",
    name: "Frances Weston",
    title: "Managing Director",
    company: "WSD",
    bio: "Financial services and technology executive spearheading agentic AI deployment in banking and asset management.",
    image: "/speakers/frances-weston.jpg"
  },
  {
    id: "alistair-taylor",
    name: "Alistair Taylor",
    title: "Director of Innovation & AI",
    company: "White & Case",
    bio: "Legal innovation leader and former leveraged finance lawyer driving AI integration and digital transformation in global law firms.",
    image: "/speakers/alistair-taylor.jpg"
  }
];

const SpeakerCard = ({ speaker, index }: { speaker: Speaker; index: number }) => (
  <Link href={`/speaker/${speaker.id}`}>
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-blue-500/50">
        <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-700">
          <Image
            src={speaker.image}
            alt={`${speaker.name} profile picture`}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">{speaker.name}</h3>
          <p className="text-blue-400 text-sm font-medium mb-1">{speaker.title}</p>
          <p className="text-gray-400 text-sm mb-3">{speaker.company}</p>
          <p className="text-gray-300 text-sm leading-relaxed">{speaker.bio}</p>
        </div>
      </div>
    </motion.article>
  </Link>
);

export default function SpeakersSection() {
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [randomSeed] = useState(() => Math.random());

  // Randomly select and sort speakers
  const displayedSpeakers = useMemo(() => {
    // Shuffle speakers array using the random seed
    const shuffled = [...speakers].sort(() => randomSeed - 0.5);

    // Take up to 6 speakers
    const selected = shuffled.slice(0, Math.min(6, speakers.length));

    // Sort alphabetically by last name
    const sorted = selected.sort((a, b) => {
      const lastNameA = a.name.split(' ').pop() || '';
      const lastNameB = b.name.split(' ').pop() || '';
      return lastNameA.localeCompare(lastNameB);
    });

    return sorted;
  }, [randomSeed]);

  return (
    <>
      <ProposalModal
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
      />

      <section id="speakers" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-800">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 space-y-4 md:space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Featured Speakers
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Learn from industry leaders shaping the future of agentic AI
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {displayedSpeakers.map((speaker, index) => (
            <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Want to speak at Agentica2026?</p>
          <button
            onClick={() => setIsProposalModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Submit Your Proposal
          </button>
        </motion.div>
      </div>
    </section>
    </>
  );
}