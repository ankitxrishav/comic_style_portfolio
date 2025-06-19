export default function ProjectsSection() {
  const projects = [
    {
      title: "Medical AI Diagnosis System",
      description: "Deep learning model for automated medical image analysis with 95% accuracy. Deployed on AWS serving 10k+ daily predictions.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["TensorFlow", "Computer Vision", "AWS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Smart Customer Support Bot",
      description: "NLP-powered chatbot using transformer models. Reduced customer support costs by 40% while maintaining 90% satisfaction rate.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["BERT", "NLP", "FastAPI"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Fraud Detection",
      description: "ML pipeline for real-time fraud detection in financial transactions. Processes 1M+ transactions per day with sub-second latency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Apache Kafka", "XGBoost", "Docker"],
      github: "#",
      demo: "#"
    },
    {
      title: "Autonomous Vehicle Vision",
      description: "Computer vision system for autonomous vehicles using convolutional neural networks. Achieved state-of-the-art object detection accuracy.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["YOLO", "OpenCV", "PyTorch"],
      github: "#",
      demo: "#"
    },
    {
      title: "ML Trading Algorithm",
      description: "Quantitative trading algorithm using ensemble methods and time series analysis. Achieved 15% annual returns with risk management.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["LSTM", "Pandas", "Backtesting"],
      github: "#",
      demo: "#"
    },
    {
      title: "Smart City Analytics",
      description: "IoT data analytics platform for smart city management. Optimized traffic flow and reduced energy consumption by 25%.",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Apache Spark", "Time Series", "IoT"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section py-20 bg-gradient-to-br from-slate-800 via-purple-900/30 to-slate-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-60 h-60 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">🚀 Featured Projects</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Revolutionary AI solutions that push the boundaries of what's possible in machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group relative overflow-hidden rounded-3xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="relative p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{project.title}</h3>
                <p className="text-slate-300 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => {
                    const colors = [
                      'from-purple-600 to-pink-600',
                      'from-pink-600 to-cyan-600', 
                      'from-cyan-600 to-green-600',
                      'from-green-600 to-purple-600'
                    ];
                    const colorClass = colors[tagIndex % colors.length];
                    return (
                      <span
                        key={tagIndex}
                        className={`bg-gradient-to-r ${colorClass} text-white px-3 py-1 rounded-full text-sm font-semibold transform hover:scale-105 transition-transform cursor-default`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
                
                <div className="flex space-x-4 pt-2">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                  >
                    <i className="fab fa-github text-lg"></i>
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
