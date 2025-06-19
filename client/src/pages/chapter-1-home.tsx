export default function Chapter1Home() {
  return (
    <section id="chapter-1" className="manga-page min-h-screen p-8 bg-white pt-24">
      {/* Chapter Title */}
      <div className="text-center mb-8">
        <h1 className="manga-title text-6xl mb-4">CHAPTER 1</h1>
        <h2 className="manga-title text-4xl">THE PROTAGONIST APPEARS</h2>
      </div>

      {/* Main manga panel layout */}
      <div className="grid grid-cols-12 grid-rows-10 gap-3 h-screen">
        
        {/* Large hero panel - Main character introduction */}
        <div className="col-span-8 row-span-7 manga-panel panel-irregular-1 relative bg-gradient-to-br from-blue-100 to-purple-100">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
            alt="Ankit Kumar - The ML Hero"
            className="w-full h-full object-cover anime-image"
          />
          
          {/* Hero speech bubble */}
          <div className="absolute top-8 left-8 speech-bubble max-w-md">
            <p className="text-xl font-bold">Hi, I'm Ankit. I build smart, human-centered ML systems!</p>
          </div>

          {/* Action SFX */}
          <div className="absolute top-1/4 right-8">
            <div className="manga-title text-5xl text-red-600 transform rotate-12">⚡ BAM!</div>
          </div>

          {/* Speed lines for dramatic entrance */}
          <div className="action-line absolute top-1/3 left-0 w-full transform rotate-12 bg-yellow-500"></div>
          <div className="action-line absolute top-2/3 left-0 w-full transform -rotate-12 bg-orange-500"></div>
        </div>

        {/* Side introduction panels */}
        <div className="col-span-4 row-span-3 manga-panel panel-irregular-2 relative bg-yellow-100">
          <div className="p-6 h-full flex flex-col justify-center">
            <h3 className="manga-title text-2xl mb-4">PROFILE DATA</h3>
            <div className="space-y-2 font-bold">
              <div>NAME: Ankit Kumar</div>
              <div>CLASS: ML Engineer</div>
              <div>LEVEL: Expert</div>
              <div>SPECIAL MOVE: Neural Networks</div>
            </div>
          </div>
        </div>

        <div className="col-span-4 row-span-4 manga-panel relative">
          <img 
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop"
            alt="Tech background"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute bottom-4 left-4 speech-bubble">
            <p className="text-sm font-bold">Ready for the adventure?</p>
          </div>
        </div>

        {/* Stats panels */}
        <div className="col-span-3 row-span-3 manga-panel panel-irregular-3 relative bg-green-100">
          <div className="p-4 h-full flex flex-col justify-center text-center">
            <h4 className="manga-title text-lg mb-2">EXPERIENCE</h4>
            <div className="text-3xl font-bold">5+</div>
            <div className="text-sm">YEARS</div>
          </div>
        </div>

        <div className="col-span-3 row-span-3 manga-panel relative bg-blue-100">
          <div className="p-4 h-full flex flex-col justify-center text-center">
            <h4 className="manga-title text-lg mb-2">PROJECTS</h4>
            <div className="text-3xl font-bold">50+</div>
            <div className="text-sm">COMPLETED</div>
          </div>
        </div>

        <div className="col-span-3 row-span-3 manga-panel panel-irregular-1 relative bg-purple-100">
          <div className="p-4 h-full flex flex-col justify-center text-center">
            <h4 className="manga-title text-lg mb-2">SKILLS</h4>
            <div className="text-3xl font-bold">15+</div>
            <div className="text-sm">TECH STACK</div>
          </div>
        </div>

        <div className="col-span-3 row-span-3 manga-panel relative bg-red-100">
          <div className="p-4 h-full flex flex-col justify-center text-center">
            <h4 className="manga-title text-lg mb-2">IMPACT</h4>
            <div className="text-3xl font-bold">1M+</div>
            <div className="text-sm">USERS SERVED</div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-8">
        <div className="speech-bubble bg-yellow-200 border-yellow-600">
          <p className="text-lg font-bold flex items-center">
            Keep reading ➜
            <span className="ml-2 animate-bounce">📖</span>
          </p>
        </div>
      </div>

      {/* Background action lines */}
      <div className="speed-line absolute top-1/4 left-0 w-full transform rotate-6"></div>
      <div className="speed-line absolute top-3/4 left-0 w-full transform -rotate-6"></div>
    </section>
  );
}