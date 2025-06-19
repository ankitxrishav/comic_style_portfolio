import { useState } from "react";

interface MangaNavigationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function MangaNavigation({ currentPage, onPageChange }: MangaNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="manga-title text-2xl">ANIME MANGA</div>
        
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => onPageChange(1)}
            className={`px-4 py-2 font-bold border-2 border-black transition-all ${
              currentPage === 1 
                ? 'bg-black text-white' 
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            PAGE 1
          </button>
          <button
            onClick={() => onPageChange(2)}
            className={`px-4 py-2 font-bold border-2 border-black transition-all ${
              currentPage === 2 
                ? 'bg-black text-white' 
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            PAGE 2
          </button>
          <button
            onClick={() => onPageChange(3)}
            className={`px-4 py-2 font-bold border-2 border-black transition-all ${
              currentPage === 3 
                ? 'bg-black text-white' 
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            PAGE 3
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
              onClick={() => {
                onPageChange(1);
                setIsOpen(false);
              }}
              className={`px-4 py-2 font-bold border-2 border-black ${
                currentPage === 1 ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              PAGE 1
            </button>
            <button
              onClick={() => {
                onPageChange(2);
                setIsOpen(false);
              }}
              className={`px-4 py-2 font-bold border-2 border-black ${
                currentPage === 2 ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              PAGE 2
            </button>
            <button
              onClick={() => {
                onPageChange(3);
                setIsOpen(false);
              }}
              className={`px-4 py-2 font-bold border-2 border-black ${
                currentPage === 3 ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              PAGE 3
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}