export default function MangaPage2() {
  return (
    <div className="manga-page min-h-screen p-8 bg-white">
      {/* Second page with different irregular panel arrangement */}
      <div className="grid grid-cols-10 grid-rows-10 gap-3 h-screen">
        
        {/* Top row - Character introduction panels */}
        <div className="col-span-3 row-span-4 manga-panel panel-irregular-2 relative">
          <img 
            src="https://images.unsplash.com/photo-1578662015905-0625c2bed4ac?w=400&h=500&fit=crop"
            alt="Luffy from One Piece"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-4 right-4 speech-bubble">
            <p className="text-lg font-bold">I'M GONNA BE KING!</p>
          </div>
        </div>

        <div className="col-span-4 row-span-3 manga-panel relative">
          <img 
            src="https://images.unsplash.com/photo-1606918801925-e2c914c4b0b0?w=500&h=400&fit=crop"
            alt="Goku from Dragon Ball"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute bottom-4 left-4">
            <h3 className="manga-title text-xl">KAMEHAMEHA!</h3>
          </div>
          {/* Energy blast lines */}
          <div className="action-line absolute top-1/2 left-0 w-full transform rotate-3"></div>
          <div className="action-line absolute top-1/2 left-0 w-full transform -rotate-3"></div>
        </div>

        <div className="col-span-3 row-span-2 manga-panel panel-irregular-3 relative">
          <img 
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop"
            alt="Attack on Titan scene"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-2 left-2 speech-bubble">
            <p className="text-sm">TATAKAE!</p>
          </div>
        </div>

        {/* Middle section - Large battle scene */}
        <div className="col-span-7 row-span-4 manga-panel panel-irregular-1 relative">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=500&fit=crop"
            alt="Epic battle scene"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
            <h2 className="manga-title text-4xl text-center">ULTIMATE CLASH!</h2>
          </div>
          {/* Multiple action lines for intense battle */}
          <div className="action-line absolute top-1/4 left-0 w-full transform rotate-45"></div>
          <div className="action-line absolute top-3/4 left-0 w-full transform -rotate-45"></div>
          <div className="action-line absolute top-1/2 left-0 w-full transform rotate-12"></div>
        </div>

        {/* Right side reaction panels */}
        <div className="col-span-3 row-span-2 manga-panel relative">
          <img 
            src="https://images.unsplash.com/photo-1606918801925-e2c914c4b0b0?w=300&h=250&fit=crop"
            alt="Shocked character"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute bottom-2 right-2 speech-bubble">
            <p className="text-sm">NANI?!</p>
          </div>
        </div>

        <div className="col-span-3 row-span-2 manga-panel panel-irregular-2 relative">
          <img 
            src="https://images.unsplash.com/photo-1578662015905-0625c2bed4ac?w=300&h=250&fit=crop"
            alt="Character determination"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute top-2 left-2 speech-bubble">
            <p className="text-sm">I won't give up!</p>
          </div>
        </div>

        {/* Bottom panels - Resolution */}
        <div className="col-span-2 row-span-3 manga-panel panel-irregular-3 relative">
          <img 
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=250&h=400&fit=crop"
            alt="Peaceful moment"
            className="w-full h-full object-cover anime-image"
          />
        </div>

        <div className="col-span-3 row-span-3 manga-panel relative">
          <img 
            src="https://images.unsplash.com/photo-1606918801925-e2c914c4b0b0?w=400&h=400&fit=crop"
            alt="Friends together"
            className="w-full h-full object-cover anime-image"
          />
          <div className="absolute bottom-4 left-4 speech-bubble">
            <p className="text-lg">Together, we're unstoppable!</p>
          </div>
        </div>

        <div className="col-span-2 row-span-3 manga-panel panel-irregular-1 relative">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=250&h=400&fit=crop"
            alt="Sunset scene"
            className="w-full h-full object-cover anime-image"
          />
        </div>

        {/* Small detail panels */}
        <div className="col-span-4 row-span-1 manga-panel relative bg-gradient-to-r from-orange-200 to-pink-200">
          <div className="flex items-center justify-center h-full">
            <p className="manga-title text-lg">TO BE CONTINUED...</p>
          </div>
        </div>

      </div>

      {/* Speed lines for dramatic effect */}
      <div className="speed-line absolute top-1/3 left-0 w-full transform rotate-6"></div>
      <div className="speed-line absolute top-2/3 left-0 w-full transform -rotate-6"></div>
      <div className="speed-line absolute top-1/2 left-0 w-full transform rotate-1"></div>
    </div>
  );
}