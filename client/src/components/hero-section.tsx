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
      className="section min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Ankit Kumar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300">Machine Learning Engineer</h2>
            <p className="text-lg text-slate-400 max-w-lg">
              Passionate about building intelligent systems that solve real-world problems.
              Specializing in deep learning, computer vision, and scalable ML architectures.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              View My Work
            </button>
            <button className="border border-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-colors">
              Download CV
            </button>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="glass-effect rounded-2xl p-8 space-y-6">
            <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-slate-300">ML Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">5+</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">15+</div>
                <div className="text-sm text-slate-300">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">10+</div>
                <div className="text-sm text-slate-300">Published Papers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="fas fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
}
