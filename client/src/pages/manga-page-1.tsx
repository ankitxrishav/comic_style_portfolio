export default function MangaPage1() {
  return (
    <div className="manga-page min-h-screen p-8 bg-white">
      {/* Page layout with irregular panels like the reference */}
      <div className="grid grid-cols-12 grid-rows-12 gap-2 h-screen">
        
        {/* Large top-left panel - Main character action scene */}
        <div className="col-span-7 row-span-6 manga-panel panel-irregular-1 relative">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
            alt="Naruto action scene"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-4 left-4 speech-bubble">
            <p className="text-lg font-bold">RASENGAN!</p>
          </div>
          {/* Action lines */}
          <div className="action-line absolute top-1/3 left-0 w-full transform rotate-12"></div>
          <div className="action-line absolute top-2/3 left-0 w-full transform -rotate-6"></div>
        </div>

        {/* Top-right vertical panels */}
        <div className="col-span-5 row-span-3 manga-panel relative">
          <img 
            src="https://images.unsplash.com/photo-1606918801925-e2c914c4b0b0?w=400&h=300&fit=crop"
            alt="Character reaction"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute bottom-2 right-2 speech-bubble">
            <p className="text-sm">What power!</p>
          </div>
        </div>

        <div className="col-span-5 row-span-3 manga-panel panel-irregular-2 relative">
          <img 
            src="https://images.unsplash.com/photo-1578662015905-0625c2bed4ac?w=400&h=300&fit=crop"
            alt="Sasuke close-up"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-2 left-2 speech-bubble">
            <p className="text-sm">Impossible...</p>
          </div>
        </div>

        {/* Middle large panel - Environmental scene */}
        <div className="col-span-8 row-span-4 manga-panel relative">
          <img 
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop"
            alt="Village landscape"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="manga-title text-center">HIDDEN LEAF VILLAGE</h2>
          </div>
        </div>

        {/* Right side smaller panels */}
        <div className="col-span-4 row-span-2 manga-panel panel-irregular-3 relative">
          <img 
            src="https://images.unsplash.com/photo-1606918801925-e2c914c4b0b0?w=300&h=200&fit=crop"
            alt="Sakura"
            className="w-full h-full object-cover anime-image"
          />
        </div>

        <div className="col-span-4 row-span-2 manga-panel relative">
          <img 
            src="https://images.unsplash.com/photo-1578662015905-0625c2bed4ac?w=300&h=200&fit=crop"
            alt="Kakashi"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute bottom-2 left-2 speech-bubble">
            <p className="text-xs">Hmm...</p>
          </div>
        </div>

        {/* Bottom panels */}
        <div className="col-span-4 row-span-2 manga-panel panel-irregular-1 relative">
          <img 
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop"
            alt="Training ground"
            className="w-full h-full object-cover anime-image"
          />
        </div>

        <div className="col-span-3 row-span-2 manga-panel relative">
          <img 
            src="https://images.unsplash.com/photo-1606918801925-e2c914c4b0b0?w=300&h=200&fit=crop"
            alt="Character emotion"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 speech-bubble">
            <p className="text-sm">We did it!</p>
          </div>
        </div>

        <div className="col-span-5 row-span-2 manga-panel panel-irregular-2 relative">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=200&fit=crop"
            alt="Team photo"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute bottom-4 right-4">
            <div className="manga-title text-2xl">TEAM 7</div>
          </div>
        </div>

      </div>

      {/* Speed lines overlay */}
      <div className="speed-line absolute top-1/4 left-0 w-full transform rotate-12"></div>
      <div className="speed-line absolute top-3/4 left-0 w-full transform -rotate-12"></div>
    </div>
  );
}