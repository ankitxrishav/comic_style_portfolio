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
        <div className="text-white font-bold text-2xl">
          <span className="gradient-text">AK</span>
          <span className="text-purple-300 ml-2">ML Engineer</span>
        </div>
        
        <div className="hidden md:flex space-x-1 bg-white/5 rounded-full p-2 backdrop-blur-lg border border-white/10">
          <button
            onClick={() => scrollToSection("home")}
            className="px-4 py-2 rounded-full text-white hover:bg-purple-600/50 hover:text-purple-200 transition-all duration-300 font-semibold"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="px-4 py-2 rounded-full text-white hover:bg-pink-600/50 hover:text-pink-200 transition-all duration-300 font-semibold"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-4 py-2 rounded-full text-white hover:bg-cyan-600/50 hover:text-cyan-200 transition-all duration-300 font-semibold"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("journey")}
            className="px-4 py-2 rounded-full text-white hover:bg-green-600/50 hover:text-green-200 transition-all duration-300 font-semibold"
          >
            Journey
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 py-2 rounded-full text-white hover:bg-orange-600/50 hover:text-orange-200 transition-all duration-300 font-semibold"
          >
            Contact
          </button>
        </div>
        
        <button
          className="md:hidden text-white p-2 rounded-full hover:bg-purple-600/30 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 glass-effect rounded-2xl p-6 border border-purple-500/30">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-purple-300 transition-all duration-300 py-3 px-4 text-left rounded-xl hover:bg-purple-600/20 font-semibold"
            >
              🏠 Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-pink-300 transition-all duration-300 py-3 px-4 text-left rounded-xl hover:bg-pink-600/20 font-semibold"
            >
              👨‍💻 About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white hover:text-cyan-300 transition-all duration-300 py-3 px-4 text-left rounded-xl hover:bg-cyan-600/20 font-semibold"
            >
              🚀 Projects
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="text-white hover:text-green-300 transition-all duration-300 py-3 px-4 text-left rounded-xl hover:bg-green-600/20 font-semibold"
            >
              🛤️ Journey
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-orange-300 transition-all duration-300 py-3 px-4 text-left rounded-xl hover:bg-orange-600/20 font-semibold"
            >
              📞 Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
