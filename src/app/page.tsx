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
import { ResumeSection } from "@/components/resume/ResumeSection";
import { GithubActivity } from "@/components/github/GithubActivity";
import { ContactTerminal } from "@/components/contact/ContactTerminal";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050508] text-[#f0f0f5] selection:bg-blue-600/30 selection:text-blue-200">
      <LoadingScreen />
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* System Profile (About) */}
      <SystemProfile />

      {/* Project Universe (Featured Case Studies & Experiments) */}
      <ProjectUniverse />

      {/* Engineering Stack */}
      <TechConstellation />

      {/* AI Engineering Lab */}
      <AILab />

      {/* Engineering Journey (Experience, Education, Certificate Vault) */}
      <section id="journey" className="py-24 px-6 max-w-7xl mx-auto relative">
        <SectionHeader
          number="05"
          category="TIMELINE & MILESTONES"
          title="ENGINEERING JOURNEY"
          subtitle="Work experience, academic qualifications, and verified certificate credentials."
        />
        <ExperienceTimeline />
        <EducationArchive />
        <CertificateVault />
      </section>

      {/* Engineering Resume Section */}
      <ResumeSection />

      {/* Live GitHub Engineering Activity */}
      <GithubActivity />

      {/* Contact Terminal */}
      <ContactTerminal />

      {/* Footer */}
      <Footer />
    </main>
  );
}
