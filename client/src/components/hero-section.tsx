export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="section min-h-screen flex items-center justify-center hero-gradient text-white relative overflow-hidden"
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="absolute w-1 h-1 bg-pink-500 rounded-full animate-ping" style={{top: '60%', left: '80%', animationDelay: '1s'}}></div>
        <div className="absolute w-3 h-3 bg-cyan-500 rounded-full animate-ping" style={{top: '80%', left: '20%', animationDelay: '2s'}}></div>
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{top: '30%', left: '70%', animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-float">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text animate-pulse">Ankit Kumar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-purple-300 font-semibold">
              🚀 Machine Learning Engineer
            </h2>
            <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
              Crafting intelligent systems that push the boundaries of what's possible.
              Specializing in cutting-edge AI, neural networks, and revolutionary ML architectures.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="neon-glow bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-bold text-white transform hover:scale-105 transition-all duration-300"
            >
              ✨ View My Work
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/50">
              📄 Download CV
            </button>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125">
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
            <a href="#" className="text-slate-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-125">
              <i className="fab fa-github text-3xl"></i>
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125">
              <i className="fab fa-twitter text-3xl"></i>
            </a>
            <a href="#" className="text-slate-400 hover:text-green-400 transition-all duration-300 transform hover:scale-125">
              <i className="fas fa-envelope text-3xl"></i>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="glass-effect rounded-3xl p-8 space-y-6 border-2 border-purple-500/30 hover:border-purple-400/60 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 gradient-text">⚡ Quick Stats</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-purple-300 font-semibold">AI Projects</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-pink-900/50 to-cyan-900/50 border border-pink-500/30">
                <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-pink-300 font-semibold">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-cyan-900/50 to-green-900/50 border border-cyan-500/30">
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-cyan-300 font-semibold">Technologies</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-900/50 to-purple-900/50 border border-green-500/30">
                <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">10+</div>
                <div className="text-sm text-green-300 font-semibold">Research Papers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 animate-bounce">
        <div className="p-3 rounded-full border-2 border-purple-400 animate-pulse">
          <i className="fas fa-chevron-down text-2xl"></i>
        </div>
      </div>
    </section>
  );
}
