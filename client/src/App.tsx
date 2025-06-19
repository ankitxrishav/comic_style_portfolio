import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import MangaNavigation from "@/components/manga-navigation";
import ThreeScene from "@/components/three-scene";
import Chapter1Home from "@/pages/chapter-1-home";
import Chapter2About from "@/pages/chapter-2-about";
import Chapter3Projects from "@/pages/chapter-3-projects";
import Chapter4Skills from "@/pages/chapter-4-skills";
import Chapter5Contact from "@/pages/chapter-5-contact";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        
        {/* Floating 3D Animation */}
        <div className="floating-3d">
          <ThreeScene />
        </div>

        {/* Navigation */}
        <MangaNavigation />

        {/* Main Content - All chapters in sequence */}
        <div className="bg-gray-100">
          <Chapter1Home />
          <Chapter2About />
          <Chapter3Projects />
          <Chapter4Skills />
          <Chapter5Contact />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
