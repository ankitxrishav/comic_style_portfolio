export default function Chapter3Projects() {
  const projects = [
    {
      title: "Medical AI Diagnosis",
      description: "🧠 Turning medical images into life-saving insights!",
      move: "Neural Vision Slash",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      tech: ["TensorFlow", "Computer Vision", "AWS"]
    },
    {
      title: "Smart Chatbot System", 
      description: "🤖 Natural language magic that understands humans!",
      move: "Language Thunder Strike",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop",
      tech: ["BERT", "NLP", "FastAPI"]
    },
    {
      title: "Fraud Detection Engine",
      description: "⚡ Real-time protection against financial threats!",
      move: "Security Shield Burst",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      tech: ["XGBoost", "Kafka", "Docker"]
    },
    {
      title: "Gesture-Controlled Sitar",
      description: "🎵 Turning motion into melody with ML magic!",
      move: "Harmonic Wave Technique",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      tech: ["MediaPipe", "Audio ML", "Python"]
    },
    {
      title: "Autonomous Vision System",
      description: "👁️ Eyes that see the future of transportation!",
      move: "Object Detection Beam",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      tech: ["YOLO", "OpenCV", "PyTorch"]
    },
    {
      title: "Recommendation Engine",
      description: "✨ Predicting what users want before they know it!",
      move: "Preference Reading Jutsu",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      tech: ["Collaborative Filtering", "Deep Learning", "Spark"]
    }
  ];

  return (
    <section id="chapter-3" className="manga-page min-h-screen p-8 bg-white">
      {/* Chapter Title */}
      <div className="text-center mb-8">
        <h1 className="manga-title text-6xl mb-4">CHAPTER 3</h1>
        <h2 className="manga-title text-4xl">THE EXPERIMENTS</h2>
      </div>

      {/* Comic grid layout for projects */}
      <div className="grid grid-cols-12 grid-rows-16 gap-3 h-[200vh]">
        
        {/* Large featured project */}
        <div className="col-span-8 row-span-5 manga-panel panel-irregular-1 relative group cursor-pointer">
          <img 
            src={projects[0].image}
            alt={projects[0].title}
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-4 left-4 speech-bubble">
            <h3 className="text-xl font-bold">{projects[0].title}</h3>
          </div>
          <div className="absolute bottom-4 right-4 speech-bubble bg-yellow-200">
            <p className="text-sm font-bold">{projects[0].description}</p>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="manga-title text-3xl text-red-600">{projects[0].move}!</div>
          </div>
          {/* Hover effect - speed lines */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="action-line absolute top-1/4 left-0 w-full transform rotate-12 bg-red-500"></div>
            <div className="action-line absolute top-3/4 left-0 w-full transform -rotate-12 bg-blue-500"></div>
          </div>
        </div>

        {/* Side project panels */}
        <div className="col-span-4 row-span-3 manga-panel panel-irregular-2 relative group cursor-pointer">
          <img 
            src={projects[1].image}
            alt={projects[1].title}
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-2 left-2 speech-bubble">
            <h4 className="text-lg font-bold">{projects[1].title}</h4>
          </div>
          <div className="absolute bottom-2 right-2 speech-bubble bg-blue-200">
            <p className="text-xs">{projects[1].description}</p>
          </div>
          <div className="absolute center opacity-0 group-hover:opacity-100">
            <div className="manga-title text-lg text-blue-600">{projects[1].move}!</div>
          </div>
        </div>

        <div className="col-span-4 row-span-2 manga-panel relative group cursor-pointer">
          <img 
            src={projects[2].image}
            alt={projects[2].title}
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-2 right-2 speech-bubble">
            <h4 className="text-sm font-bold">{projects[2].title}</h4>
          </div>
          <div className="absolute bottom-2 left-2 speech-bubble bg-green-200">
            <p className="text-xs">{projects[2].description}</p>
          </div>
        </div>

        {/* Middle row projects */}
        <div className="col-span-6 row-span-4 manga-panel panel-irregular-3 relative group cursor-pointer">
          <img 
            src={projects[3].image}
            alt={projects[3].title}
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-4 right-4 speech-bubble">
            <h3 className="text-xl font-bold">{projects[3].title}</h3>
          </div>
          <div className="absolute bottom-4 left-4 speech-bubble bg-purple-200">
            <p className="text-sm font-bold">{projects[3].description}</p>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100">
            <div className="manga-title text-2xl text-purple-600">{projects[3].move}!</div>
          </div>
        </div>

        <div className="col-span-6 row-span-4 manga-panel panel-irregular-1 relative group cursor-pointer">
          <img 
            src={projects[4].image}
            alt={projects[4].title}
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-4 left-4 speech-bubble">
            <h3 className="text-xl font-bold">{projects[4].title}</h3>
          </div>
          <div className="absolute bottom-4 right-4 speech-bubble bg-orange-200">
            <p className="text-sm font-bold">{projects[4].description}</p>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100">
            <div className="manga-title text-2xl text-orange-600">{projects[4].move}!</div>
          </div>
        </div>

        {/* Tech stack showcase */}
        <div className="col-span-12 row-span-2 manga-panel relative bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="p-6 h-full flex items-center justify-center">
            <div className="text-center">
              <h3 className="manga-title text-2xl mb-4">BATTLE TECH ARSENAL</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["Python", "TensorFlow", "PyTorch", "AWS", "Docker", "Kubernetes", "React", "FastAPI"].map((tech, index) => (
                  <div key={index} className="speech-bubble bg-blue-100 border-blue-400">
                    <span className="font-bold text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final project */}
        <div className="col-span-8 row-span-3 manga-panel panel-irregular-2 relative group cursor-pointer">
          <img 
            src={projects[5].image}
            alt={projects[5].title}
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-4 left-4 speech-bubble">
            <h3 className="text-xl font-bold">{projects[5].title}</h3>
          </div>
          <div className="absolute bottom-4 right-4 speech-bubble bg-cyan-200">
            <p className="text-sm font-bold">{projects[5].description}</p>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100">
            <div className="manga-title text-2xl text-cyan-600">{projects[5].move}!</div>
          </div>
        </div>

        {/* Impact stats */}
        <div className="col-span-4 row-span-3 manga-panel relative bg-yellow-50">
          <div className="p-4 h-full flex flex-col justify-center">
            <h4 className="manga-title text-xl mb-4">BATTLE RESULTS</h4>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">1M+</div>
                <div className="text-sm">Users Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">40%</div>
                <div className="text-sm">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Chapter transition */}
      <div className="flex justify-center mt-8">
        <div className="speech-bubble bg-purple-200 border-purple-600">
          <p className="text-lg font-bold">
            The experiments were successful... Now for the ultimate powers! ⚡
          </p>
        </div>
      </div>
    </section>
  );
}