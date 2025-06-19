import { useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import MangaNavigation from "@/components/manga-navigation";
import ThreeScene from "@/components/three-scene";
import MangaPage1 from "@/pages/manga-page-1";
import MangaPage2 from "@/pages/manga-page-2";
import MangaPage3 from "@/pages/manga-page-3";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <MangaPage1 />;
      case 2:
        return <MangaPage2 />;
      case 3:
        return <MangaPage3 />;
      default:
        return <MangaPage1 />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        
        {/* Floating 3D Animation */}
        <div className="floating-3d">
          <ThreeScene />
        </div>

        {/* Navigation */}
        <MangaNavigation 
          currentPage={currentPage} 
          onPageChange={setCurrentPage} 
        />

        {/* Main Content */}
        <div className="pt-20 min-h-screen bg-gray-100">
          {renderCurrentPage()}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
