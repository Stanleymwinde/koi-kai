import {
  HeroSection,
  Kui,
  MissionVisionSection,
  Teamsection,
} from "@/components/About";
import CoreValues from "@/components/About/Core-Values";
import { CTAsection } from "@/components/Services";

export default function AboutPage() {
  return (
    <main>
      <HeroSection />
      <MissionVisionSection />
      <CoreValues />
      <Kui />
      <Teamsection />
      <CTAsection />
    </main>
  );
}
