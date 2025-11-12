'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SpeakersSection from '@/components/sections/SpeakersSection';
import PartnersSection from '@/components/sections/PartnersSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import HackathonSection from '@/components/sections/HackathonSection';
import RegistrationSection from '@/components/sections/RegistrationSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        <PartnersSection />
        <ScheduleSection />
        <HackathonSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
}
