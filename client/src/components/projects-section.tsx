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
    <section id="projects" className="section py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A collection of ML projects showcasing my expertise in various domains and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-slate-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a
                    href={project.demo}
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <i className="fas fa-external-link-alt"></i> Demo
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
