import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="floating-nav fixed top-0 left-0 right-0 z-30 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">Ankit Kumar</div>
        
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-white hover:text-cyan-400 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-cyan-400 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-white hover:text-cyan-400 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("journey")}
            className="text-white hover:text-cyan-400 transition-colors"
          >
            Journey
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-cyan-400 transition-colors"
          >
            Contact
          </button>
        </div>
        
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-slate-900 rounded-lg p-4">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-cyan-400 transition-colors py-2 text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-cyan-400 transition-colors py-2 text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white hover:text-cyan-400 transition-colors py-2 text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="text-white hover:text-cyan-400 transition-colors py-2 text-left"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-cyan-400 transition-colors py-2 text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
