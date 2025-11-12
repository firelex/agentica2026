import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Users, ArrowLeft, Download, CheckCircle2 } from 'lucide-react';
import sessionsData from '@/data/sessions.json';

interface SessionData {
  id: string;
  title: string;
  day: number;
  track: string;
  time: string;
  type: string;
  description: string;
  longDescription: string;
  speakers: Array<{
    name: string;
    title: string;
    bio: string;
    image: string;
  }>;
  learningObjectives: string[];
  prerequisites: string[];
  targetAudience: string[];
  materials: Array<{
    title: string;
    url: string;
  }>;
}

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all sessions
export async function generateStaticParams() {
  const sessions = sessionsData as Record<string, SessionData>;
  return Object.keys(sessions).map((slug) => ({
    slug,
  }));
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'keynote': return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    case 'panel': return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
    case 'workshop': return 'bg-green-500/10 text-green-400 border-green-500/30';
    case 'session': return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
    case 'demo': return 'bg-orange-500/10 text-orange-400 border-orange-500/30';
    case 'roundtable': return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
    case 'fireside': return 'bg-red-500/10 text-red-400 border-red-500/30';
    default: return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
  }
};

export default function SessionDetailPage({ params }: PageProps) {
  const sessions = sessionsData as Record<string, SessionData>;
  const session = sessions[params.slug];

  if (!session) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/#schedule"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Schedule
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Session Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getTypeColor(session.type)} uppercase`}>
                {session.type}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-700/50 text-gray-300 border border-gray-600">
                Track {session.track}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {session.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Day {session.day}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{session.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Track {session.track}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">About This Session</h2>
            <p className="text-gray-300 text-lg mb-6">{session.description}</p>
            <div className="prose prose-invert max-w-none">
              {session.longDescription.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-400 mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Speakers */}
          {session.speakers && session.speakers.length > 0 && (
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Speakers</h2>
              </div>
              <div className="space-y-6">
                {session.speakers.map((speaker, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                        {speaker.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
                      <p className="text-blue-400 mb-3">{speaker.title}</p>
                      <p className="text-gray-400">{speaker.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Learning Objectives */}
            {session.learningObjectives && session.learningObjectives.length > 0 && (
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  Learning Objectives
                </h2>
                <ul className="space-y-3">
                  {session.learningObjectives.map((objective, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300">
                      <span className="text-green-400 mt-1">•</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Target Audience */}
            {session.targetAudience && session.targetAudience.length > 0 && (
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  Who Should Attend
                </h2>
                <div className="flex flex-wrap gap-2">
                  {session.targetAudience.map((audience, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-purple-500/10 text-purple-300 border border-purple-500/30 rounded-full text-sm"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Prerequisites */}
          {session.prerequisites && session.prerequisites.length > 0 && (
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Prerequisites</h2>
              <ul className="space-y-2">
                {session.prerequisites.map((prereq, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300">
                    <span className="text-blue-400">→</span>
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Materials */}
          {session.materials && session.materials.length > 0 && (
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-blue-400" />
                Session Materials
              </h2>
              <div className="space-y-3">
                {session.materials.map((material, idx) => (
                  <a
                    key={idx}
                    href={material.url}
                    className="flex items-center gap-3 p-4 bg-gray-700/30 hover:bg-gray-700/50 border border-gray-600 rounded-lg transition-colors group"
                  >
                    <Download className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                    <span className="text-gray-300 group-hover:text-white">{material.title}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Don't Miss This Session
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Register now to secure your spot at Agentica 2026 and get access to this session and all conference content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#registration"
                className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Register Now
              </Link>
              <Link
                href="/#schedule"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                View Full Schedule
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
