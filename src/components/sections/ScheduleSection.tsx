'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface ScheduleItem {
  id?: string;
  time: string;
  title: string;
  speaker?: string;
  type: 'keynote' | 'panel' | 'workshop' | 'break' | 'networking' | 'session' | 'demo' | 'roundtable' | 'fireside' | 'hackathon' | 'intensive' | 'lightning' | 'strategic' | 'lab';
  description?: string;
  track?: string;
}

interface Track {
  name: string;
  sessions: ScheduleItem[];
}

interface DaySchedule {
  mainSessions: ScheduleItem[];
  tracks?: Track[];
}

// Day 1: Foundations & Vision
const day1Schedule: DaySchedule = {
  mainSessions: [
    {
      time: "08:00-09:00",
      title: "Registration & Welcome Coffee",
      type: "networking",
      description: "Check-in and networking with fellow attendees"
    },
    {
      time: "09:00-09:30",
      title: "Opening Keynote",
      type: "keynote",
      description: "Setting the stage for three days of agentic AI innovation"
    },
    {
      time: "12:30-14:00",
      title: "Lunch & Expo",
      type: "networking",
      description: "Network and explore the latest innovations in the expo hall"
    },
    {
      time: "17:00-19:00",
      title: "Opening Reception",
      type: "networking",
      description: "Join us for drinks and networking to kick off the conference"
    }
  ],
  tracks: [
    {
      name: "Track A: Enterprise Strategy",
      sessions: [
        {
          id: "scaling-agentic-ai",
          time: "09:30-10:30",
          title: "Scaling Agentic AI Across Large Organisations",
          type: "session",
          track: "A"
        },
        {
          id: "measuring-impact",
          time: "10:45-11:45",
          title: "Measuring Real Impact and Value of AI Agents",
          type: "session",
          track: "A"
        },
        {
          id: "board-level-leadership",
          time: "11:45-12:30",
          title: "Panel: Board-Level Leadership & Accountability",
          type: "panel",
          track: "A"
        },
        {
          id: "legacy-systems-integration",
          time: "14:00-15:00",
          title: "Bringing Agent Workflows into Legacy Systems",
          type: "session",
          track: "A"
        },
        {
          id: "building-trust",
          time: "15:15-16:15",
          title: "Roundtable: Building Trust in AI Within Organisations",
          type: "roundtable",
          track: "A"
        },
        {
          id: "quick-wins",
          time: "16:15-17:00",
          title: "Quick Wins: 90-Day Agent Pilots",
          type: "session",
          track: "A"
        }
      ]
    },
    {
      name: "Track B: Technical Deep Dive",
      sessions: [
        {
          id: "memory-architectures",
          time: "09:30-10:30",
          title: "Memory Architectures: How Agents Learn & Remember",
          type: "session",
          track: "B"
        },
        {
          id: "data-infrastructure",
          time: "10:45-11:45",
          title: "Building Data Infrastructure for Agentic AI",
          type: "session",
          track: "B"
        },
        {
          id: "decision-tracking",
          time: "11:45-12:30",
          title: "Demo: Decision Tracking & Explainability Tools",
          type: "demo",
          track: "B"
        },
        {
          id: "build-agent-part-1",
          time: "14:00-15:30",
          title: "Hands-On: Build Your First Agent (Part 1)",
          type: "workshop",
          track: "B"
        },
        {
          id: "multimodal-agents",
          time: "15:45-17:00",
          title: "Multimodal Agents Demo (Text, Voice, Video)",
          type: "demo",
          track: "B"
        }
      ]
    },
    {
      name: "Track C: Regulatory & Ethics",
      sessions: [
        {
          id: "uk-eu-rules",
          time: "09:30-10:30",
          title: "UK and EU Rules for Autonomous Systems",
          type: "session",
          track: "C"
        },
        {
          id: "decision-boundaries",
          time: "10:45-11:45",
          title: "When Should AI Ask for Approval? Decision Boundaries",
          type: "session",
          track: "C"
        },
        {
          id: "ethical-dilemmas",
          time: "11:45-12:30",
          title: "Interactive Workshop: Ethical Dilemmas in Practice",
          type: "workshop",
          track: "C"
        },
        {
          id: "vc-panel",
          time: "14:00-15:00",
          title: "VC Panel: Funding the Agentic Ecosystem",
          type: "panel",
          track: "C"
        },
        {
          id: "startup-pitch",
          time: "15:15-17:00",
          title: "Startup Pitch Competition & Feedback",
          type: "session",
          track: "C"
        }
      ]
    }
  ]
};

// Day 2: Advanced Applications & Integration
const day2Schedule: DaySchedule = {
  mainSessions: [
    {
      time: "09:00-09:30",
      title: "Day 2 Keynote: Agents in the Wild: Real Deployments",
      type: "keynote",
      description: "Stories from the front lines of production AI agent systems"
    },
    {
      time: "12:30-14:00",
      title: "Lunch & Networking",
      type: "networking",
      description: "Connect with peers and discuss morning insights"
    },
    {
      time: "19:00-22:00",
      title: "Gala Dinner & Awards",
      type: "networking",
      description: "Celebrate innovation and recognize excellence in agentic AI"
    }
  ],
  tracks: [
    {
      name: "Track A: Industry Verticals",
      sessions: [
        {
          id: "financial-services",
          time: "09:30-10:30",
          title: "Agentic AI in Financial Services",
          type: "session",
          track: "A"
        },
        {
          id: "healthcare-life-sciences",
          time: "10:45-11:45",
          title: "Healthcare & Life Sciences Applications",
          type: "session",
          track: "A"
        },
        {
          id: "manufacturing-supply-chain",
          time: "11:45-12:30",
          title: "Manufacturing & Supply Chain Transformation",
          type: "session",
          track: "A"
        },
        {
          id: "fireside-real-teams",
          time: "14:00-15:00",
          title: "Fireside Chat: What Real Teams Learned",
          type: "fireside",
          track: "A"
        },
        {
          id: "integration-failures",
          time: "15:15-16:15",
          title: "Panel: Integration Failures & How to Avoid Them",
          type: "panel",
          track: "A"
        },
        {
          id: "measuring-roi",
          time: "16:30-17:30",
          title: "Measuring ROI: Beyond the Hype",
          type: "session",
          track: "A"
        }
      ]
    },
    {
      name: "Track B: Advanced Technical",
      sessions: [
        {
          id: "multi-agent-orchestration",
          time: "09:30-10:30",
          title: "Multi-Agent Orchestration & Communication",
          type: "session",
          track: "B"
        },
        {
          id: "build-agent-part-2",
          time: "10:45-11:45",
          title: "Hands-On: Build Your First Agent (Part 2)",
          type: "workshop",
          track: "B"
        },
        {
          id: "performance-optimization",
          time: "11:45-12:30",
          title: "Performance Optimization at Scale",
          type: "session",
          track: "B"
        },
        {
          id: "advanced-multi-agent",
          time: "14:00-15:30",
          title: "Advanced Workshop: Multi-Agent Systems",
          type: "workshop",
          track: "B"
        },
        {
          id: "hackathon",
          time: "15:45-17:30",
          title: "Hackathon: Speed Building Challenge",
          type: "hackathon",
          track: "B"
        }
      ]
    },
    {
      name: "Track C: Risk & Governance",
      sessions: [
        {
          id: "innovation-risk",
          time: "09:30-10:30",
          title: "Balancing Innovation and Risk in Autonomous Systems",
          type: "session",
          track: "C"
        },
        {
          id: "human-in-loop",
          time: "10:45-11:45",
          title: "Human-in-the-Loop Design Patterns",
          type: "session",
          track: "C"
        },
        {
          id: "audit-compliance",
          time: "11:45-12:30",
          title: "Audit & Compliance Frameworks",
          type: "session",
          track: "C"
        },
        {
          id: "organizational-readiness",
          time: "14:00-15:00",
          title: "Organizational Readiness Assessment",
          type: "session",
          track: "C"
        },
        {
          id: "workforce-transformation",
          time: "15:15-16:15",
          title: "Skills & Workforce Transformation",
          type: "session",
          track: "C"
        },
        {
          id: "agent-strategy",
          time: "16:30-17:30",
          title: "Interactive: Design Your Agent Strategy",
          type: "workshop",
          track: "C"
        }
      ]
    }
  ]
};

// Day 3: Future-Proofing & Action Planning
const day3Schedule: DaySchedule = {
  mainSessions: [
    {
      time: "09:00-09:30",
      title: "Morning Keynote: The Next Frontier",
      type: "keynote",
      description: "Exploring the cutting edge of agentic AI research and development"
    },
    {
      time: "12:00-13:30",
      title: "Lunch",
      type: "networking",
      description: "Final networking opportunity"
    },
    {
      time: "16:00-16:45",
      title: "Closing Keynote: Your Agentic Journey Starts Now",
      type: "keynote",
      description: "Actionable insights and next steps for your AI journey"
    },
    {
      time: "16:45-17:30",
      title: "Farewell Reception",
      type: "networking",
      description: "Thank you for joining us - see you next year!"
    }
  ],
  tracks: [
    {
      name: "Track A: Executive Summit",
      sessions: [
        {
          id: "ceo-roundtable",
          time: "09:30-10:30",
          title: "CEO Roundtable: Strategic Imperatives",
          type: "roundtable",
          track: "A"
        },
        {
          id: "ai-native-organization",
          time: "10:45-12:00",
          title: "Building the AI-Native Organization",
          type: "session",
          track: "A"
        }
      ]
    },
    {
      name: "Track B: Engineering Excellence",
      sessions: [
        {
          id: "testing-qa",
          time: "09:30-10:30",
          title: "Testing & Quality Assurance for Agents",
          type: "session",
          track: "B"
        },
        {
          id: "open-source-showcase",
          time: "10:45-12:00",
          title: "Open Source Tools & Frameworks Showcase",
          type: "demo",
          track: "B"
        }
      ]
    },
    {
      name: "Track C: Ethics & Society",
      sessions: [
        {
          id: "fair-unbiased",
          time: "09:30-10:30",
          title: "Ensuring Fair & Unbiased Agent Decisions",
          type: "session",
          track: "C"
        },
        {
          id: "public-trust",
          time: "10:45-12:00",
          title: "Public Trust & Transparency Requirements",
          type: "session",
          track: "C"
        }
      ]
    }
  ]
};

const afternoonOptions = [
  {
    title: "Intensive Hands-On Workshop",
    time: "13:30-16:00",
    description: "Complete agent build with deployment",
    type: "intensive" as const
  },
  {
    title: "Lightning Learning",
    time: "13:30-16:00",
    description: "Pick from 10 different topics (3x 45-min sessions)",
    type: "lightning" as const
  },
  {
    title: "Strategic Planning Workshop",
    time: "13:30-16:00",
    description: "Develop your 2025 agent roadmap with peer review and expert feedback",
    type: "strategic" as const
  },
  {
    title: "Innovation Lab Tours",
    time: "13:30-16:00",
    description: "Demos from 20+ vendors with 1-on-1 consultations",
    type: "lab" as const
  }
];

const continuousFeatures = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Demo Pods",
    description: "Always-on demonstrations in expo hall"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Expert Office Hours",
    description: "Book 20-min consultations with industry leaders"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Networking Zones",
    description: "Industry-specific meetup spaces throughout the venue"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Student & Academic Track",
    description: "Special programming for researchers and students"
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'keynote': return 'border-blue-500 bg-blue-500/10 text-blue-300';
    case 'panel': return 'border-purple-500 bg-purple-500/10 text-purple-300';
    case 'workshop': return 'border-green-500 bg-green-500/10 text-green-300';
    case 'break': return 'border-yellow-500 bg-yellow-500/10 text-yellow-300';
    case 'networking': return 'border-pink-500 bg-pink-500/10 text-pink-300';
    case 'session': return 'border-cyan-500 bg-cyan-500/10 text-cyan-300';
    case 'demo': return 'border-orange-500 bg-orange-500/10 text-orange-300';
    case 'roundtable': return 'border-indigo-500 bg-indigo-500/10 text-indigo-300';
    case 'fireside': return 'border-red-500 bg-red-500/10 text-red-300';
    case 'hackathon': return 'border-emerald-500 bg-emerald-500/10 text-emerald-300';
    case 'intensive': return 'border-violet-500 bg-violet-500/10 text-violet-300';
    case 'lightning': return 'border-amber-500 bg-amber-500/10 text-amber-300';
    case 'strategic': return 'border-rose-500 bg-rose-500/10 text-rose-300';
    case 'lab': return 'border-teal-500 bg-teal-500/10 text-teal-300';
    default: return 'border-gray-500 bg-gray-500/10 text-gray-300';
  }
};

const ScheduleItem = ({ item }: { item: ScheduleItem }) => {
  const content = (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
      <div className="flex-1">
        <h4 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors leading-snug">
          {item.title}
        </h4>
        {item.description && (
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
        )}
      </div>
      <span className="text-xs sm:text-sm font-mono text-gray-400 sm:ml-4 whitespace-nowrap self-start">{item.time}</span>
    </div>
  );

  if (item.id) {
    return (
      <Link href={`/session/${item.id}`} className="block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`p-4 sm:p-5 rounded-lg border ${getTypeColor(item.type)} backdrop-blur-sm cursor-pointer hover:border-opacity-100 transition-all group`}
        >
          {content}
          {item.speaker && (
            <p className="text-blue-400 text-xs sm:text-sm">{item.speaker}</p>
          )}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`p-4 sm:p-5 rounded-lg border ${getTypeColor(item.type)} backdrop-blur-sm`}
    >
      {content}
      {item.speaker && (
        <p className="text-blue-400 text-xs sm:text-sm">{item.speaker}</p>
      )}
    </motion.div>
  );
};

const TrackSchedule = ({ track }: { track: Track }) => (
  <div className="mb-6">
    <h4 className="text-lg sm:text-xl font-bold text-white mb-4 border-l-4 border-blue-500 pl-3 leading-tight">
      {track.name}
    </h4>
    <div className="space-y-4 sm:space-y-5">
      {track.sessions.map((session, idx) => (
        <ScheduleItem key={idx} item={session} />
      ))}
    </div>
  </div>
);

const DayScheduleComponent = ({ day, dayNum, schedule, showAfternoonOptions = false }: {
  day: string;
  dayNum: number;
  schedule: DaySchedule;
  showAfternoonOptions?: boolean;
}) => {
  const morningMainSessions = schedule.mainSessions.filter(s => {
    const hour = parseInt(s.time.split(':')[0]);
    return hour < 12;
  });

  const afternoonMainSessions = schedule.mainSessions.filter(s => {
    const hour = parseInt(s.time.split(':')[0]);
    return hour >= 12 && hour < 17;
  });

  const eveningMainSessions = schedule.mainSessions.filter(s => {
    const hour = parseInt(s.time.split(':')[0]);
    return hour >= 17;
  });

  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Calendar className="w-8 h-8 text-blue-400" />
          {day}
        </h3>
        <p className="text-gray-400 text-lg ml-11">
          {dayNum === 1 && "Why & What - Vision and foundations"}
          {dayNum === 2 && "How - Implementation and integration"}
          {dayNum === 3 && "What's Next - Future planning and action"}
        </p>
      </motion.div>

      {/* Morning Main Sessions */}
      {morningMainSessions.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-300 mb-3">Morning</h4>
          <div className="space-y-4 sm:space-y-5">
            {morningMainSessions.map((session, idx) => (
              <ScheduleItem key={idx} item={session} />
            ))}
          </div>
        </div>
      )}

      {/* Morning Parallel Tracks */}
      {schedule.tracks && schedule.tracks.length > 0 && (
        <div className="mb-6">
          <h4 className="text-base sm:text-lg font-semibold text-gray-300 mb-4">Parallel Morning Tracks</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {schedule.tracks.map((track, idx) => {
              const morningSessions = track.sessions.filter(s => {
                const hour = parseInt(s.time.split('-')[0].split(':')[0]);
                return hour < 12;
              });
              if (morningSessions.length === 0) return null;
              return (
                <TrackSchedule
                  key={idx}
                  track={{ ...track, sessions: morningSessions }}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Afternoon Main Sessions */}
      {afternoonMainSessions.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-300 mb-3">Afternoon</h4>
          <div className="space-y-4 sm:space-y-5">
            {afternoonMainSessions.map((session, idx) => (
              <ScheduleItem key={idx} item={session} />
            ))}
          </div>
        </div>
      )}

      {/* Afternoon Parallel Tracks */}
      {schedule.tracks && schedule.tracks.length > 0 && (
        <div className="mb-6">
          {schedule.tracks.some(track =>
            track.sessions.some(s => {
              const hour = parseInt(s.time.split('-')[0].split(':')[0]);
              return hour >= 12 && hour < 17;
            })
          ) && (
            <>
              <h4 className="text-base sm:text-lg font-semibold text-gray-300 mb-4">
                {showAfternoonOptions ? "Choose Your Adventure Sessions" : "Parallel Afternoon Tracks"}
              </h4>
              {showAfternoonOptions ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  {afternoonOptions.map((option, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className={`p-5 sm:p-6 rounded-lg border ${getTypeColor(option.type)} backdrop-blur-sm`}
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                        <h4 className="text-base sm:text-lg font-bold text-white leading-snug">{option.title}</h4>
                        <span className="text-xs sm:text-sm font-mono text-gray-400 sm:ml-4 whitespace-nowrap">{option.time}</span>
                      </div>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{option.description}</p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                  {schedule.tracks.map((track, idx) => {
                    const afternoonSessions = track.sessions.filter(s => {
                      const hour = parseInt(s.time.split('-')[0].split(':')[0]);
                      return hour >= 12 && hour < 17;
                    });
                    if (afternoonSessions.length === 0) return null;
                    return (
                      <TrackSchedule
                        key={idx}
                        track={{ ...track, sessions: afternoonSessions }}
                      />
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Evening Sessions */}
      {eveningMainSessions.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-300 mb-3">Evening</h4>
          <div className="space-y-4 sm:space-y-5">
            {eveningMainSessions.map((session, idx) => (
              <ScheduleItem key={idx} item={session} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function ScheduleSection() {
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <section id="schedule" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 space-y-4 md:space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Conference Schedule
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Three days packed with insights, workshops, and networking opportunities
          </p>
        </motion.div>

        {/* Day Selector */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex rounded-lg border border-gray-700 bg-gray-800/50 p-1 w-full max-w-md sm:w-auto">
            {[1, 2, 3].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex-1 sm:flex-none px-4 sm:px-6 py-3 rounded-md font-semibold transition-all text-sm sm:text-base ${
                  selectedDay === day
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Day {day}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Content */}
        <div className="max-w-7xl mx-auto">
          {selectedDay === 1 && (
            <DayScheduleComponent
              day="Day 1: Foundations & Vision"
              dayNum={1}
              schedule={day1Schedule}
            />
          )}
          {selectedDay === 2 && (
            <DayScheduleComponent
              day="Day 2: Advanced Applications & Integration"
              dayNum={2}
              schedule={day2Schedule}
            />
          )}
          {selectedDay === 3 && (
            <DayScheduleComponent
              day="Day 3: Future-Proofing & Action Planning"
              dayNum={3}
              schedule={day3Schedule}
              showAfternoonOptions={true}
            />
          )}
        </div>

        {/* Throughout All Days Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-12 border-t border-gray-700"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
            Throughout All Days
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {continuousFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-lg border border-gray-700 bg-gray-800/50 backdrop-blur-sm"
              >
                <div className="text-blue-400 mb-3">
                  {feature.icon}
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 text-center px-4">
            <p className="text-sm sm:text-base text-gray-400 mb-2">
              <span className="font-semibold text-white">Virtual Participation:</span> Livestream of main tracks available
            </p>
          </div>
        </motion.div>

        {/* Footer Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16 space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-gray-400">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>London (Venue TBA)</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-blue-500/50 text-sm sm:text-base w-full max-w-xs sm:w-auto">
            Download Full Schedule
          </button>
        </motion.div>
      </div>
    </section>
  );
}
