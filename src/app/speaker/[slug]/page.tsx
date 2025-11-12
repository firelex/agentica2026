'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { ArrowLeft, Building, Linkedin, Globe, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import RegistrationModal from '@/components/forms/RegistrationModal';

interface SpeakerDetail {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  longBio: string;
  image: string;
  expertise: string[];
  sessionTitle?: string;
  sessionDescription?: string;
  social?: {
    linkedin?: string;
    website?: string;
    email?: string;
  };
}

const speakers: Record<string, SpeakerDetail> = {
  'mathias-strasser': {
    id: 'mathias-strasser',
    name: 'Mathias Strasser',
    title: 'Founder & CEO',
    company: 'Scissero',
    bio: 'Pioneer in AI-powered legal technology and document automation, building the future of intelligent legal workflows.',
    longBio: `Mathias Strasser is the visionary Founder and CEO of Scissero, a groundbreaking legal technology company that's revolutionizing how legal professionals work with documents and contracts. With a deep understanding of both artificial intelligence and the legal industry, Mathias has been at the forefront of developing agentic AI systems that can autonomously handle complex legal tasks.

Mathias brings over two decades of experience at the intersection of law and technology. He began his career as a corporate lawyer at Sullivan & Cromwell LLP (1999-2009), where he advised on complex M&A transactions and gained firsthand insight into the inefficiencies of legal document workflows. This experience planted the seeds for his entrepreneurial journey.

In 2009, Mathias founded WSD (www.wsd.com), a legal technology and services company that pioneered innovative approaches to document automation and legal process optimization. Under his leadership, WSD grew to become a leading provider of legal technology solutions, ultimately leading to a successful exit in 2022.

Following the WSD exit, Mathias founded Scissero to push the boundaries even further by applying cutting-edge agentic AI to legal workflows. Under his leadership, Scissero has developed AI agents capable of contract analysis, document drafting, and compliance checking—all while maintaining human oversight and explainability. Mathias is passionate about ensuring that AI agents are transparent, reliable, and truly beneficial to their users.`,
    image: '/speakers/mathias-strasser.jpg',
    expertise: [
      'Agentic AI Architecture',
      'Legal Technology',
      'Document Automation',
      'AI Product Development',
      'Enterprise AI Deployment',
      'Regulatory Compliance in AI',
      'Entrepreneurship & Scale-ups'
    ],
    sessionTitle: 'Building Production-Ready AI Agents: Lessons from Legal Tech',
    sessionDescription: 'Join Mathias as he shares real-world experiences building and deploying AI agents in the legal industry. Learn about the architecture decisions, safety considerations, and user experience challenges of bringing agentic AI from prototype to production in a highly regulated environment.',
    social: {
      linkedin: 'https://www.linkedin.com/in/mathias-strasser-6990594/',
      website: 'https://scissero.com',
      email: 'mathias@scissero.com'
    }
  },
  'lawrence-lessig': {
    id: 'lawrence-lessig',
    name: 'Lawrence Lessig',
    title: 'Roy L. Furman Professor of Law and Leadership',
    company: 'Harvard Law School',
    bio: 'World-renowned legal scholar and thought leader shaping the intersection of law, technology, and democracy.',
    longBio: `Professor Lawrence Lessig is a world-renowned legal scholar and thought leader whose work has shaped modern understanding of the relationship between law, technology, and democracy. He is the Roy L. Furman Professor of Law and Leadership at Harvard Law School, where he continues to advance groundbreaking ideas at the intersection of constitutional law, political reform, and digital innovation.

Prior to returning to Harvard, Lessig taught at Stanford Law School, where he founded the Center for Internet and Society, and at the University of Chicago. Earlier in his career, he clerked for Judge Richard Posner on the U.S. Court of Appeals for the Seventh Circuit and Justice Antonin Scalia on the U.S. Supreme Court. He holds degrees from the University of Pennsylvania (BA in Economics and BS in Management), Cambridge University (MA in Philosophy), and Yale Law School (JD).

A pioneer of the digital commons movement, Lessig founded Equal Citizens and was a founding board member of Creative Commons. He serves on the Scientific Board of the AXA Research Fund and is a member of both the American Academy of Arts and Sciences and the American Philosophical Society. His numerous honors include the Webby Award, the Free Software Foundation's Freedom Award, the Scientific American 50 Award, and the Fastcase 50 Award.

Lessig's early work explored the interaction between law and technology, particularly copyright in the digital age. His recent focus has turned to the structural challenges facing democracy and the innovations needed to restore public trust. He is the author of more than a dozen influential books, including They Don't Represent Us (2019), Fidelity & Constraint (2019), Republic, Lost (2011, 2015), Free Culture (2004), and Code and Other Laws of Cyberspace (1999).`,
    image: '/speakers/lawrence-lessig.jpg',
    expertise: [
      'Constitutional Law',
      'Technology Policy',
      'Digital Rights',
      'Copyright Law',
      'Democracy Reform',
      'Internet Governance',
      'Ethics in AI'
    ],
    sessionTitle: 'Law, Democracy, and the Age of Intelligent Agents',
    sessionDescription: 'Professor Lessig explores the profound implications of agentic AI for democratic governance and the rule of law. Drawing on decades of scholarship at the intersection of law and technology, he examines how we can ensure AI agents serve democratic values and the public interest.',
    social: {
      website: 'https://lessig.org'
    }
  },
  'christian-nentwich': {
    id: 'christian-nentwich',
    name: 'Christian Nentwich',
    title: 'Venture Partner for AI',
    company: '13books',
    bio: 'Serial entrepreneur and technologist with a track record of building category-defining enterprise software companies.',
    longBio: `Dr. Christian Nentwich is a serial entrepreneur, technologist, and investor with a track record of building and exiting category-defining enterprise software companies. A lifelong innovator with deep expertise in data systems, artificial intelligence, and large-scale enterprise automation, he has founded and led businesses that have delivered hundreds of millions in shareholder value.

Christian is currently a Venture Partner for AI at 13books, a FinTech-focused venture capital firm, and serves as a chairman and board member across multiple private technology companies. His career reflects a consistent vision of transforming how complex organizations harness data and automation to drive performance and innovation.

Before his current roles, Christian founded and led several successful ventures in the enterprise software space, including pioneering platforms that applied semantic and data-driven technologies to financial and legal workflows. His work has earned recognition for pushing the boundaries of how AI and automation can enhance decision-making and compliance in regulated industries.

Christian holds a PhD in Computer Science from University College London (UCL), where his research focused on distributed data systems and large-scale enterprise applications. He continues to advise and invest in the next generation of AI-driven technology companies.`,
    image: '/speakers/christian-nentwich.jpg',
    expertise: [
      'Enterprise AI',
      'Data Systems',
      'Venture Capital',
      'Financial Technology',
      'Semantic Technologies',
      'AI Strategy',
      'Entrepreneurship'
    ],
    sessionTitle: 'From Research to Market: Commercializing Agentic AI',
    sessionDescription: 'Christian shares insights from decades of building and investing in enterprise software companies. Learn what it takes to transform cutting-edge AI research into products that deliver real business value, and how to navigate the challenges of bringing agentic systems to market.',
    social: {
      linkedin: 'https://www.linkedin.com/in/nentwich/'
    }
  },
  'jay-phipps': {
    id: 'jay-phipps',
    name: 'Jay Phipps',
    title: 'Senior Director Analyst, National Defense and Security',
    company: 'Gartner',
    bio: 'Technology and defense expert bridging federal service and strategic advisory with deep experience in defense intelligence systems.',
    longBio: `Jay Phipps (DBA) is a distinguished technology and defense expert whose career bridges the highest levels of U.S. federal service and strategic advisory in the private sector. In his current role as Senior Director Analyst for National Defense and Security at Gartner, he leads guidance for U.S. federal CIOs and the defense & intelligence community on IT strategy, governance, agile methods, security compliance and mission-critical infrastructure.

Prior to joining Gartner in March 2025, Phipps served as Chief of Operations & Engineering at the Defense Intelligence Agency (DIA), overseeing the planning, maintenance and operations of the Department of Defense Intelligence Information Systems (DoDIIS) infrastructure—capping over 30 years of senior technical leadership in uniform and civilian capacities.

His academic credentials reflect deep strategic focus and leadership. He holds a Doctor of Business Administration (High Distinction) from Liberty University, an MBA in Organizational Leadership from Liberty, and an MS in National Resource Strategy from the Dwight D. Eisenhower School for National Security and Resource Strategy at the National Defense University. He also earned a Certificate in Russian from the Defense Language Institute Foreign Language Center, underscoring his operational intelligence background.

In his advisory capacity at Gartner, Phipps draws on his deep legacy of federal and allied-intelligence experience—spanning networked operations with the Five Eyes community, NATO partners and U.S. defence programs—to provide actionable insight on emerging technologies, mission-edge IT, resilience, AI in defence, and global information-sharing frameworks.`,
    image: '/speakers/jay-phipps.jpg',
    expertise: [
      'Defense Intelligence Systems',
      'Federal IT Strategy',
      'Security Compliance',
      'Mission-Critical Infrastructure',
      'AI in Defense',
      'Agile Methodologies',
      'National Security'
    ],
    sessionTitle: 'Malicious AI: Threats, Defense, and Strategic Response',
    sessionDescription: 'Drawing on decades of experience at the highest levels of U.S. defense and intelligence, Jay examines the emerging threat landscape of malicious AI. Learn how adversaries might weaponize agentic AI, the vulnerabilities in current systems, and the strategic frameworks needed to defend against AI-powered attacks in defense and national security contexts.',
    social: {
      linkedin: 'https://www.linkedin.com/in/jay-phipps/'
    }
  },
  'ben-hollowood': {
    id: 'ben-hollowood',
    name: 'Ben Hollowood',
    title: 'Partner',
    company: 'Bowmark Capital',
    bio: 'Private equity leader driving portfolio management and value creation through strategic growth and digital transformation.',
    longBio: `Ben Hollowood is a leading private equity professional whose work bridges strategic management, investment, and digital transformation. As a Partner at Bowmark Capital, he heads the firm's portfolio management and value creation initiatives, helping portfolio companies accelerate growth through strategic expansion, operational excellence, and technology-driven innovation.

Before joining Bowmark, Ben was Managing Director at AnaCap Financial Partners, where he led portfolio management and transformation efforts across financial services and technology businesses. Earlier in his career, he spent a decade in strategy consulting with Bain & Company and L.E.K. Consulting, advising global clients on corporate strategy, international expansion, and performance improvement.

Ben holds an MA in Neuroscience from the University of Cambridge and is a CFA charterholder. Drawing on a rare blend of analytical depth and strategic foresight, he brings a multidisciplinary perspective to investment management—combining rigorous financial acumen with an understanding of human and organizational behavior.`,
    image: '/speakers/ben-hollowood.jpg',
    expertise: [
      'Private Equity',
      'Portfolio Management',
      'Value Creation',
      'Digital Transformation',
      'Strategic Growth',
      'Operational Excellence',
      'Investment Strategy'
    ],
    sessionTitle: 'Investing in the Agentic AI Era',
    sessionDescription: 'Ben shares insights from the private equity perspective on agentic AI. Learn how investors evaluate AI companies, what drives value creation in AI-powered businesses, and how companies can position themselves for successful growth and exits in this rapidly evolving landscape.',
    social: {
      linkedin: 'https://www.linkedin.com/in/ben-hollowood/'
    }
  }
};

export default function SpeakerPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const speaker = speakers[slug];
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!speaker) {
    return (
      <main className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
        <div className="text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Speaker Not Found</h1>
          <p className="text-gray-400">The speaker you're looking for doesn't exist.</p>
          <Link
            href="/#speakers"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Back to Speakers
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedTicket="professional"
      />

      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between py-4 sm:py-5">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
              Agentica<span className="text-blue-400">2026</span>
            </Link>
            <Link
              href="/#speakers"
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
            {/* Speaker Header */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-700 mb-8 sm:mb-12">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                {/* Profile Image */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                  <Image
                    src={speaker.image}
                    alt={`${speaker.name} profile picture`}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Speaker Info */}
                <div className="flex-1 text-center md:text-left space-y-3 sm:space-y-4">
                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">
                      {speaker.name}
                    </h1>
                    <p className="text-lg sm:text-xl text-blue-400 font-medium mb-1">
                      {speaker.title}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                      <Building className="w-4 h-4" aria-hidden="true" />
                      <span>{speaker.company}</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  {speaker.social && (
                    <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
                      {speaker.social.linkedin && (
                        <a
                          href={speaker.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                          aria-label={`${speaker.name} on LinkedIn`}
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {speaker.social.website && (
                        <a
                          href={speaker.social.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                          aria-label={`${speaker.name}'s website`}
                        >
                          <Globe className="w-5 h-5" />
                        </a>
                      )}
                      {speaker.social.email && (
                        <a
                          href={`mailto:${speaker.social.email}`}
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                          aria-label={`Email ${speaker.name}`}
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Session Information */}
            {speaker.sessionTitle && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 sm:p-8 border border-blue-500/30 mb-8 sm:mb-12"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Conference Session
                </h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-3 sm:mb-4">
                  {speaker.sessionTitle}
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  {speaker.sessionDescription}
                </p>
              </motion.section>
            )}

            {/* Biography */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">About</h2>
              <div className="prose prose-invert max-w-none space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                {speaker.longBio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.section>

            {/* Areas of Expertise */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Areas of Expertise
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {speaker.expertise.map((area, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-xs sm:text-sm font-medium border border-blue-500/30"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-12 sm:mt-16 space-y-4"
            >
              <p className="text-base sm:text-lg text-gray-400">
                Don't miss {speaker.name.split(' ')[0]}'s session at Agentica2026
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-blue-500/50 text-sm sm:text-base"
                >
                  Register Now
                </button>
                <Link
                  href="/#schedule"
                  className="bg-transparent border-2 border-gray-600 text-gray-300 hover:text-white hover:border-white px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors text-sm sm:text-base"
                >
                  View Schedule
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
    </>
  );
}
