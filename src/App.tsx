import { MotionConfig } from 'framer-motion';
import { CookieBanner } from './components/CookieBanner';
import { Navbar } from './components/Navbar';
import { ChallengeSection } from './sections/ChallengeSection';
import { ContactSection } from './sections/ContactSection';
import { DifferentialsSection } from './sections/DifferentialsSection';
import { FlowsSection } from './sections/FlowsSection';
import { FooterSection } from './sections/FooterSection';
import { HeroSection } from './sections/HeroSection';
import { InsightsSection } from './sections/InsightsSection';
import { ModulesSection } from './sections/ModulesSection';
import { PdcaSection } from './sections/PdcaSection';
import { RoadmapSection } from './sections/RoadmapSection';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div
        className="relative min-h-screen w-full"
        style={{
          fontFamily: 'var(--font-sans)',
          backgroundColor: 'var(--jaris-white)',
          color: 'var(--jaris-ink-strong)',
        }}
      >
        <div className="noise-overlay" aria-hidden="true" />

        <Navbar />

        <main>
          <HeroSection />
          <ChallengeSection />
          <ModulesSection />
          <PdcaSection />
          <FlowsSection />
          <InsightsSection />
          <DifferentialsSection />
          <RoadmapSection />
          <ContactSection />
        </main>

        <FooterSection />
        <CookieBanner />
      </div>
    </MotionConfig>
  );
}

export default App;

