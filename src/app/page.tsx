import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { SystemProfile } from "@/components/about/SystemProfile";
import { ProjectUniverse } from "@/components/projects/ProjectUniverse";
import { TechConstellation } from "@/components/engineering/TechConstellation";
import { AILab } from "@/components/engineering/AILab";
import { ExperienceTimeline } from "@/components/journey/ExperienceTimeline";
import { EducationArchive } from "@/components/journey/EducationArchive";
import { CertificateVault } from "@/components/journey/CertificateVault";
import { GithubActivity } from "@/components/github/GithubActivity";
import { ContactTerminal } from "@/components/contact/ContactTerminal";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionTransition } from "@/components/ui/SectionTransition";
import { SectionProgress } from "@/components/ui/SectionProgress";
import { DocumentViewerProvider } from "@/components/ui/DocumentViewerContext";

export default function Home() {
  return (
    <DocumentViewerProvider>
      <main className="min-h-screen bg-[#050508] text-[#f0f0f5] selection:bg-blue-600/30 selection:text-blue-200">
      <LoadingScreen />
      <CustomCursor />
      <Navbar />

      {/* Floating Desktop Section Progress Bar */}
      <SectionProgress />

      {/* Hero Section */}
      <SectionTransition>
        <HeroSection />
      </SectionTransition>

      {/* System Profile (About) */}
      <SectionTransition>
        <SystemProfile />
      </SectionTransition>

      {/* Project Universe (Featured Case Studies & Experiments) */}
      <SectionTransition>
        <ProjectUniverse />
      </SectionTransition>

      {/* Engineering Stack */}
      <SectionTransition>
        <TechConstellation />
      </SectionTransition>

      {/* AI Engineering Lab */}
      <SectionTransition>
        <AILab />
      </SectionTransition>

      {/* Engineering Journey (Experience, Education, Certificate Vault) */}
      <SectionTransition id="journey" className="py-24 px-6 max-w-7xl mx-auto">
        <SectionHeader
          number="05"
          category="TIMELINE & MILESTONES"
          title="ENGINEERING JOURNEY"
          subtitle="Work experience, academic qualifications, and verified certificate credentials."
        />
        <ExperienceTimeline />
        <EducationArchive />
        <CertificateVault />
      </SectionTransition>

      {/* Live GitHub Engineering Activity */}
      <SectionTransition>
        <GithubActivity />
      </SectionTransition>

      {/* Contact Terminal */}
      <SectionTransition>
        <ContactTerminal />
      </SectionTransition>

      {/* Footer */}
      <Footer />
    </main>
    </DocumentViewerProvider>
  );
}
