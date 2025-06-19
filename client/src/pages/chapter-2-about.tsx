export default function Chapter2About() {
  return (
    <section id="chapter-2" className="manga-page min-h-screen p-8 bg-white">
      {/* Chapter Title */}
      <div className="text-center mb-8">
        <h1 className="manga-title text-6xl mb-4">CHAPTER 2</h1>
        <h2 className="manga-title text-4xl">THE BACKSTORY</h2>
      </div>

      {/* Story panels showing the journey */}
      <div className="grid grid-cols-12 grid-rows-12 gap-3 h-screen">
        
        {/* Origin story panel */}
        <div className="col-span-6 row-span-4 manga-panel panel-irregular-1 relative">
          <img 
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop"
            alt="Childhood coding"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-4 left-4 speech-bubble">
            <p className="text-lg font-bold">Young Ankit discovers coding...</p>
          </div>
          <div className="absolute bottom-4 right-4">
            <div className="manga-title text-2xl">ORIGIN</div>
          </div>
        </div>

        {/* Education journey */}
        <div className="col-span-6 row-span-4 manga-panel panel-irregular-2 relative">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"
            alt="University learning"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-4 right-4 speech-bubble">
            <p className="text-lg font-bold">The training begins!</p>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="manga-title text-2xl">TRAINING ARC</div>
          </div>
        </div>

        {/* Narration panel */}
        <div className="col-span-12 row-span-2 manga-panel relative bg-gradient-to-r from-gray-100 to-gray-200">
          <div className="p-6 h-full flex items-center justify-center">
            <p className="manga-title text-2xl text-center">
              "Raised by logic. Driven by creativity. Trained in code."
            </p>
          </div>
        </div>

        {/* ML Discovery */}
        <div className="col-span-8 row-span-4 manga-panel panel-irregular-3 relative">
          <img 
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop"
            alt="AI and ML discovery"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="manga-title text-4xl text-center text-purple-600">ML AWAKENING!</div>
          </div>
          {/* Power-up effects */}
          <div className="action-line absolute top-1/4 left-0 w-full transform rotate-45 bg-purple-500"></div>
          <div className="action-line absolute top-3/4 left-0 w-full transform -rotate-45 bg-blue-500"></div>
        </div>

        {/* RPG-style stat blocks */}
        <div className="col-span-4 row-span-4 manga-panel relative bg-yellow-50">
          <div className="p-4 h-full">
            <h3 className="manga-title text-xl mb-4">CHARACTER STATS</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold">Intelligence:</span>
                <div className="flex">
                  <span className="text-yellow-500">★★★★★</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-bold">ML Power:</span>
                <div className="flex">
                  <span className="text-blue-500">⚡⚡⚡⚡</span>
                  <span className="text-gray-300">⚡</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-bold">Creativity:</span>
                <div className="flex">
                  <span className="text-red-500">🔥🔥🔥🔥🔥</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-bold">Problem Solving:</span>
                <div className="flex">
                  <span className="text-green-500">★★★★★</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-bold">Teamwork:</span>
                <div className="flex">
                  <span className="text-purple-500">♦♦♦♦</span>
                  <span className="text-gray-300">♦</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional journey panels */}
        <div className="col-span-4 row-span-2 manga-panel panel-irregular-1 relative">
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop"
            alt="First job"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute bottom-2 left-2 speech-bubble">
            <p className="text-sm font-bold">First ML job acquired!</p>
          </div>
        </div>

        <div className="col-span-4 row-span-2 manga-panel relative">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop"
            alt="Team collaboration"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-2 right-2 speech-bubble">
            <p className="text-sm font-bold">Building amazing teams!</p>
          </div>
        </div>

        <div className="col-span-4 row-span-2 manga-panel panel-irregular-2 relative">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop"
            alt="Innovation"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute bottom-2 right-2 speech-bubble">
            <p className="text-sm font-bold">Innovation mode: ON!</p>
          </div>
        </div>

      </div>

      {/* Chapter transition */}
      <div className="flex justify-center mt-8">
        <div className="speech-bubble bg-blue-200 border-blue-600">
          <p className="text-lg font-bold">
            The hero's journey continues... ⚡
          </p>
        </div>
      </div>
    </section>
  );
}