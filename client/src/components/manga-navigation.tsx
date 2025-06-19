import { useState } from "react";

export default function MangaNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToChapter = (chapterId: string) => {
    const element = document.getElementById(chapterId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="manga-title text-2xl">ANKIT'S MANGA STORY</div>
        
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => scrollToChapter("chapter-1")}
            className="px-3 py-2 font-bold border-2 border-black bg-white text-black hover:bg-gray-100 transition-all text-sm"
          >
            CH.1 HERO
          </button>
          <button
            onClick={() => scrollToChapter("chapter-2")}
            className="px-3 py-2 font-bold border-2 border-black bg-white text-black hover:bg-gray-100 transition-all text-sm"
          >
            CH.2 BACKSTORY
          </button>
          <button
            onClick={() => scrollToChapter("chapter-3")}
            className="px-3 py-2 font-bold border-2 border-black bg-white text-black hover:bg-gray-100 transition-all text-sm"
          >
            CH.3 EXPERIMENTS
          </button>
          <button
            onClick={() => scrollToChapter("chapter-4")}
            className="px-3 py-2 font-bold border-2 border-black bg-white text-black hover:bg-gray-100 transition-all text-sm"
          >
            CH.4 POWERS
          </button>
          <button
            onClick={() => scrollToChapter("chapter-5")}
            className="px-3 py-2 font-bold border-2 border-black bg-white text-black hover:bg-gray-100 transition-all text-sm"
          >
            CH.5 COLLAB
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden border-2 border-black p-2 bg-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-black">
          <div className="flex flex-col space-y-2 p-4">
            <button
              onClick={() => scrollToChapter("chapter-1")}
              className="px-4 py-2 font-bold border-2 border-black bg-white text-black text-left"
            >
              Chapter 1: The Hero Appears
            </button>
            <button
              onClick={() => scrollToChapter("chapter-2")}
              className="px-4 py-2 font-bold border-2 border-black bg-white text-black text-left"
            >
              Chapter 2: The Backstory
            </button>
            <button
              onClick={() => scrollToChapter("chapter-3")}
              className="px-4 py-2 font-bold border-2 border-black bg-white text-black text-left"
            >
              Chapter 3: The Experiments
            </button>
            <button
              onClick={() => scrollToChapter("chapter-4")}
              className="px-4 py-2 font-bold border-2 border-black bg-white text-black text-left"
            >
              Chapter 4: Powers Unleashed
            </button>
            <button
              onClick={() => scrollToChapter("chapter-5")}
              className="px-4 py-2 font-bold border-2 border-black bg-white text-black text-left"
            >
              Chapter 5: Let's Collab
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}