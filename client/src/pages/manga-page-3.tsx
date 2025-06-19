export default function MangaPage3() {
  return (
    <div className="manga-page min-h-screen p-8 bg-white">
      {/* Third page with complex irregular panel layout */}
      <div className="grid grid-cols-12 grid-rows-8 gap-2 h-screen">
        
        {/* Top section - Wide cinematic panel */}
        <div className="col-span-12 row-span-2 manga-panel relative">
          <img 
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=300&fit=crop"
            alt="Anime landscape panorama"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="manga-title text-5xl text-center">ANIME WORLD</h1>
          </div>
        </div>

        {/* Complex middle section with varied sizes */}
        <div className="col-span-5 row-span-3 manga-panel panel-irregular-1 relative">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
            alt="Demon Slayer action"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-4 right-4 speech-bubble">
            <p className="text-lg font-bold">WATER BREATHING!</p>
          </div>
          {/* Water slash effects */}
          <div className="action-line absolute top-1/3 left-0 w-full transform rotate-25 bg-blue-500"></div>
          <div className="action-line absolute top-2/3 left-0 w-full transform -rotate-25 bg-blue-500"></div>
        </div>

        <div className="col-span-3 row-span-2 manga-panel relative">
          <img 
            src="https://images.unsplash.com/photo-1606918801925-e2c914c4b0b0?w=400&h=300&fit=crop"
            alt="My Hero Academia"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute bottom-2 left-2 speech-bubble">
            <p className="text-sm">PLUS ULTRA!</p>
          </div>
        </div>

        <div className="col-span-4 row-span-3 manga-panel panel-irregular-2 relative">
          <img 
            src="https://images.unsplash.com/photo-1578662015905-0625c2bed4ac?w=500&h=400&fit=crop"
            alt="Jujutsu Kaisen"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className="manga-title text-2xl text-center">DOMAIN EXPANSION</h3>
          </div>
          {/* Cursed energy effects */}
          <div className="action-line absolute top-1/4 left-0 w-full transform rotate-45 bg-purple-600"></div>
          <div className="action-line absolute top-3/4 left-0 w-full transform -rotate-45 bg-purple-600"></div>
        </div>

        {/* Small character panels */}
        <div className="col-span-2 row-span-1 manga-panel panel-irregular-3 relative">
          <img 
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=150&fit=crop"
            alt="Character close-up"
            className="w-full h-full object-cover anime-image"
          />
        </div>

        <div className="col-span-3 row-span-1 manga-panel relative">
          <img 
            src="https://images.unsplash.com/photo-1606918801925-e2c914c4b0b0?w=400&h=150&fit=crop"
            alt="Reaction shot"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 speech-bubble">
            <p className="text-xs">Incredible!</p>
          </div>
        </div>

        {/* Bottom section with varied panel sizes */}
        <div className="col-span-4 row-span-3 manga-panel relative">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop"
            alt="Studio Ghibli style"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute bottom-4 right-4 speech-bubble">
            <p className="text-lg">Magic exists everywhere!</p>
          </div>
        </div>

        <div className="col-span-2 row-span-2 manga-panel panel-irregular-1 relative">
          <img 
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop"
            alt="Peaceful scene"
            className="w-full h-full object-cover anime-image"
          />
        </div>

        <div className="col-span-3 row-span-2 manga-panel panel-irregular-2 relative">
          <img 
            src="https://images.unsplash.com/photo-1606918801925-e2c914c4b0b0?w=400&h=300&fit=crop"
            alt="Friendship moment"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-4 left-4 speech-bubble">
            <p className="text-sm">We'll always be friends!</p>
          </div>
        </div>

        <div className="col-span-3 row-span-1 manga-panel relative">
          <img 
            src="https://images.unsplash.com/photo-1578662015905-0625c2bed4ac?w=400&h=150&fit=crop"
            alt="Determined look"
            className="w-full h-full object-cover anime-image"
          />
        </div>

        {/* Final wide panel */}
        <div className="col-span-8 row-span-1 manga-panel panel-irregular-3 relative bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200">
          <div className="flex items-center justify-center h-full">
            <h2 className="manga-title text-3xl">THE ADVENTURE CONTINUES...</h2>
          </div>
        </div>

      </div>

      {/* Dynamic speed lines */}
      <div className="speed-line absolute top-1/5 left-0 w-full transform rotate-12"></div>
      <div className="speed-line absolute top-2/5 left-0 w-full transform -rotate-8"></div>
      <div className="speed-line absolute top-3/5 left-0 w-full transform rotate-4"></div>
      <div className="speed-line absolute top-4/5 left-0 w-full transform -rotate-15"></div>
    </div>
  );
}