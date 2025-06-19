import ThreeScene from "@/components/three-scene";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import JourneySection from "@/components/journey-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="relative">
      {/* Fixed 3D Canvas */}
      <div id="canvas-container">
        <ThreeScene />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2024 Ankit Kumar. All rights reserved. Built with passion for AI and machine learning.</p>
        </div>
      </footer>
    </div>
  );
}
