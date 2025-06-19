export default function AboutSection() {
  return (
    <section id="about" className="section py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">🧠 About Me</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Pushing the boundaries of artificial intelligence through innovative ML solutions that transform industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-lg text-slate-200 leading-relaxed">
              A visionary Machine Learning Engineer with 5+ years of experience architecting 
              next-generation AI systems. My passion lies in transforming complex data into 
              intelligent solutions that revolutionize how businesses operate.
            </p>

            <p className="text-lg text-slate-200 leading-relaxed">
              Specializing in cutting-edge deep learning, advanced computer vision, and large language models.
              I've successfully deployed ML systems across healthcare, fintech, and autonomous vehicles,
              impacting millions of users worldwide.
            </p>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold gradient-text">🔥 Core Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-200 font-semibold">🧠 Deep Learning</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-pink-900/30 to-cyan-900/30 border border-pink-500/30">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-pink-200 font-semibold">👁️ Computer Vision</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-cyan-900/30 to-green-900/30 border border-cyan-500/30">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-200 font-semibold">💬 NLP & LLMs</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-green-900/30 to-purple-900/30 border border-green-500/30">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-green-200 font-semibold">⚙️ MLOps & Cloud</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse"></div>
                  <span className="text-orange-200 font-semibold">🐍 Python & PyTorch</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/30">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-200 font-semibold">☁️ AWS & GCP</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600"
                alt="Ankit Kumar - ML Engineer"
                className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto transform group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="glass-effect rounded-3xl p-8 space-y-6 border-2 border-cyan-500/30">
              <h4 className="text-2xl font-bold gradient-text">🎓 Education</h4>
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/40">
                  <div className="font-bold text-purple-200 text-lg">M.S. in Computer Science</div>
                  <div className="text-purple-300 font-semibold">Stanford University</div>
                  <div className="text-sm text-purple-400">2018-2020 • AI/ML Focus</div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-900/40 to-green-900/40 border border-cyan-500/40">
                  <div className="font-bold text-cyan-200 text-lg">B.Tech in Computer Engineering</div>
                  <div className="text-cyan-300 font-semibold">IIT Delhi</div>
                  <div className="text-sm text-cyan-400">2014-2018 • Honors Graduate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
