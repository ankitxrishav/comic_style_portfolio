export default function Chapter4Skills() {
  const skills = [
    {
      name: "Machine Learning",
      specialMove: "Neural Slash",
      powerLevel: 95,
      description: "Master of supervised, unsupervised, and reinforcement learning techniques",
      icon: "🧠",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Computer Vision", 
      specialMove: "Vision Pulse",
      powerLevel: 90,
      description: "Image recognition, object detection, and visual AI systems",
      icon: "👁️",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Deep Learning",
      specialMove: "Network Storm",
      powerLevel: 92,
      description: "Neural networks, CNNs, RNNs, Transformers, and cutting-edge architectures",
      icon: "⚡",
      color: "from-yellow-400 to-orange-600"
    },
    {
      name: "Data Engineering",
      specialMove: "Pipeline Thunder",
      powerLevel: 85,
      description: "ETL pipelines, data lakes, streaming, and scalable data infrastructure",
      icon: "🔧",
      color: "from-green-400 to-green-600"
    },
    {
      name: "Natural Language Processing",
      specialMove: "Language Beam",
      powerLevel: 88,
      description: "Text analysis, sentiment analysis, chatbots, and language models",
      icon: "💬",
      color: "from-pink-400 to-red-600"
    },
    {
      name: "Cloud & DevOps",
      specialMove: "Scale Burst",
      powerLevel: 83,
      description: "AWS, Docker, Kubernetes, CI/CD, and cloud-native architectures",
      icon: "☁️",
      color: "from-cyan-400 to-blue-600"
    },
    {
      name: "Frontend Development",
      specialMove: "Interface Flash",
      powerLevel: 80,
      description: "React, TypeScript, modern web development, and user experience design",
      icon: "💻",
      color: "from-indigo-400 to-purple-600"
    },
    {
      name: "Backend Systems",
      specialMove: "Server Strike",
      powerLevel: 87,
      description: "APIs, microservices, databases, and scalable backend architectures",
      icon: "⚙️",
      color: "from-gray-500 to-gray-700"
    }
  ];

  const PowerMeter = ({ level }: { level: number }) => {
    const bars = Math.floor(level / 10);
    return (
      <div className="flex items-center space-x-1">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className={`w-2 h-6 ${
              i < bars ? 'bg-yellow-400' : 'bg-gray-300'
            } border border-black`}
          />
        ))}
        <span className="ml-2 font-bold">{level}</span>
      </div>
    );
  };

  return (
    <section id="chapter-4" className="manga-page min-h-screen p-8 bg-white">
      {/* Chapter Title */}
      <div className="text-center mb-8">
        <h1 className="manga-title text-6xl mb-4">CHAPTER 4</h1>
        <h2 className="manga-title text-4xl">THE POWERS UNLEASHED</h2>
      </div>

      {/* Skills showcase in manga panel grid */}
      <div className="grid grid-cols-12 grid-rows-20 gap-3 h-[250vh]">
        
        {/* Power introduction panel */}
        <div className="col-span-12 row-span-3 manga-panel relative bg-gradient-to-r from-yellow-100 to-orange-100">
          <div className="p-6 h-full flex items-center justify-center">
            <div className="text-center">
              <h3 className="manga-title text-4xl mb-4">ULTIMATE SKILL ARSENAL</h3>
              <p className="text-xl font-bold">Behold! The powers accumulated through years of training!</p>
              <div className="absolute top-4 right-4">
                <div className="manga-title text-3xl text-red-600 transform rotate-12">POWER UP!</div>
              </div>
            </div>
          </div>
          {/* Power-up effect lines */}
          <div className="action-line absolute top-1/3 left-0 w-full transform rotate-12 bg-yellow-500"></div>
          <div className="action-line absolute top-2/3 left-0 w-full transform -rotate-12 bg-orange-500"></div>
        </div>

        {/* Skill cards arranged like manga panels */}
        {skills.map((skill, index) => {
          const isLarge = index % 3 === 0;
          const colSpan = isLarge ? 6 : 3;
          const rowSpan = isLarge ? 4 : 3;
          const panelClass = `panel-irregular-${(index % 3) + 1}`;

          return (
            <div
              key={index}
              className={`col-span-${colSpan} row-span-${rowSpan} manga-panel ${panelClass} relative bg-gradient-to-br ${skill.color} text-white group cursor-pointer`}
            >
              {/* Skill card content */}
              <div className="p-4 h-full flex flex-col justify-between relative z-10">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl">{skill.icon}</span>
                    <div className="speech-bubble bg-white text-black">
                      <span className="text-xs font-bold">{skill.specialMove}</span>
                    </div>
                  </div>
                  <h3 className="manga-title text-xl mb-2">{skill.name}</h3>
                  <p className="text-sm opacity-90 mb-4">{skill.description}</p>
                </div>
                
                <div>
                  <div className="mb-2">
                    <span className="font-bold text-sm">POWER LEVEL:</span>
                  </div>
                  <PowerMeter level={skill.powerLevel} />
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="manga-title text-2xl text-white text-center">
                    {skill.specialMove}!
                  </div>
                </div>
                {/* Action lines on hover */}
                <div className="action-line absolute top-1/4 left-0 w-full transform rotate-45 bg-white opacity-30"></div>
                <div className="action-line absolute top-3/4 left-0 w-full transform -rotate-45 bg-white opacity-30"></div>
              </div>
            </div>
          );
        })}

        {/* Ultimate combo panel */}
        <div className="col-span-12 row-span-4 manga-panel panel-irregular-1 relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="p-6 h-full flex items-center justify-center">
            <div className="text-center">
              <h3 className="manga-title text-4xl mb-6">ULTIMATE COMBO TECHNIQUE</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="speech-bubble bg-white text-black">
                  <span className="font-bold">ML + Vision</span>
                </div>
                <div className="text-4xl">+</div>
                <div className="speech-bubble bg-white text-black">
                  <span className="font-bold">Cloud Scale</span>
                </div>
              </div>
              <div className="manga-title text-3xl mb-4">= INTELLIGENT SYSTEMS MASTERY!</div>
              <p className="text-lg">Combining all powers to create production-ready AI solutions that scale!</p>
            </div>
          </div>
          {/* Ultimate power effects */}
          <div className="action-line absolute top-1/5 left-0 w-full transform rotate-12 bg-yellow-400"></div>
          <div className="action-line absolute top-2/5 left-0 w-full transform -rotate-8 bg-cyan-400"></div>
          <div className="action-line absolute top-3/5 left-0 w-full transform rotate-6 bg-green-400"></div>
          <div className="action-line absolute top-4/5 left-0 w-full transform -rotate-15 bg-red-400"></div>
        </div>

        {/* Experience stats */}
        <div className="col-span-6 row-span-3 manga-panel relative bg-gray-100">
          <div className="p-4 h-full">
            <h4 className="manga-title text-2xl mb-4">BATTLE EXPERIENCE</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm">Years Active</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm">Projects Won</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">15+</div>
                <div className="text-sm">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">1M+</div>
                <div className="text-sm">Users Impacted</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement badges */}
        <div className="col-span-6 row-span-3 manga-panel panel-irregular-2 relative bg-yellow-50">
          <div className="p-4 h-full">
            <h4 className="manga-title text-2xl mb-4">ACHIEVEMENT BADGES</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="speech-bubble bg-gold-200 border-yellow-600">
                <span className="text-xs font-bold">🏆 ML Master</span>
              </div>
              <div className="speech-bubble bg-blue-200 border-blue-600">
                <span className="text-xs font-bold">⚡ Speed Deployer</span>
              </div>
              <div className="speech-bubble bg-green-200 border-green-600">
                <span className="text-xs font-bold">🎯 Accuracy Ace</span>
              </div>
              <div className="speech-bubble bg-purple-200 border-purple-600">
                <span className="text-xs font-bold">🚀 Scale Warrior</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Chapter transition */}
      <div className="flex justify-center mt-8">
        <div className="speech-bubble bg-red-200 border-red-600">
          <p className="text-lg font-bold">
            All powers have been revealed... Time for the final chapter! 🔥
          </p>
        </div>
      </div>
    </section>
  );
}