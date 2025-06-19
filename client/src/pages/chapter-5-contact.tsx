import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Chapter5Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "📨 Message Sent!",
      description: "Your collaboration request has been received! Ankit will respond soon.",
    });
    setFormData({
      name: "",
      email: "",
      project: "",
      message: ""
    });
  };

  return (
    <section id="chapter-5" className="manga-page min-h-screen p-8 bg-white">
      {/* Chapter Title */}
      <div className="text-center mb-8">
        <h1 className="manga-title text-6xl mb-4">CHAPTER 5</h1>
        <h2 className="manga-title text-4xl">LET'S COLLAB</h2>
      </div>

      {/* Final chapter layout */}
      <div className="grid grid-cols-12 grid-rows-12 gap-3 h-screen">
        
        {/* Main collaboration call panel */}
        <div className="col-span-8 row-span-5 manga-panel panel-irregular-1 relative bg-gradient-to-br from-cyan-100 to-blue-200">
          <div className="p-6 h-full flex items-center justify-center">
            <div className="text-center">
              <h3 className="manga-title text-4xl mb-6">📣 WANT TO SUMMON ME?</h3>
              <p className="text-xl font-bold mb-4">
                Ready to embark on an epic ML adventure together?
              </p>
              <p className="text-lg">
                Whether it's building intelligent systems, solving complex problems, 
                or creating the next breakthrough AI solution - I'm ready for the challenge!
              </p>
              
              {/* Power indicators */}
              <div className="flex justify-center space-x-4 mt-6">
                <div className="speech-bubble bg-green-200 border-green-600">
                  <span className="font-bold">⚡ AVAILABLE</span>
                </div>
                <div className="speech-bubble bg-blue-200 border-blue-600">
                  <span className="font-bold">🚀 READY TO DEPLOY</span>
                </div>
                <div className="speech-bubble bg-purple-200 border-purple-600">
                  <span className="font-bold">🧠 FULL POWER</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action lines for energy */}
          <div className="action-line absolute top-1/4 left-0 w-full transform rotate-12 bg-cyan-500"></div>
          <div className="action-line absolute top-3/4 left-0 w-full transform -rotate-12 bg-blue-500"></div>
        </div>

        {/* Contact info side panel */}
        <div className="col-span-4 row-span-5 manga-panel panel-irregular-2 relative bg-yellow-50">
          <div className="p-4 h-full">
            <h4 className="manga-title text-xl mb-4">DIRECT CONTACT</h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📧</span>
                <div>
                  <div className="font-bold">Email Jutsu</div>
                  <div className="text-sm">ankit.kumar@ml-hero.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💼</span>
                <div>
                  <div className="font-bold">LinkedIn Portal</div>
                  <div className="text-sm">linkedin.com/in/ankit-ml</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🐙</span>
                <div>
                  <div className="font-bold">GitHub Dojo</div>
                  <div className="text-sm">github.com/ankit-ml-master</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <div className="font-bold">Location</div>
                  <div className="text-sm">San Francisco, CA</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 bg-green-100 rounded border-2 border-green-400">
              <div className="manga-title text-sm text-center">
                RESPONSE TIME: 24 HOURS
              </div>
            </div>
          </div>
        </div>

        {/* Mission briefing form */}
        <div className="col-span-12 row-span-7 manga-panel relative bg-white border-4 border-black">
          <div className="p-6 h-full">
            <div className="text-center mb-6">
              <h3 className="manga-title text-3xl mb-2">MISSION BRIEFING FORM</h3>
              <p className="text-lg font-bold">Tell me about your next epic project!</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 h-full">
              {/* Left column */}
              <div className="space-y-4">
                <div className="manga-panel bg-gray-50 p-4">
                  <label className="manga-title text-lg mb-2 block">HERO NAME</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="border-2 border-black font-bold"
                    required
                  />
                </div>

                <div className="manga-panel bg-gray-50 p-4">
                  <label className="manga-title text-lg mb-2 block">COMMUNICATION CRYSTAL</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@domain.com"
                    className="border-2 border-black font-bold"
                    required
                  />
                </div>

                <div className="manga-panel bg-gray-50 p-4">
                  <label className="manga-title text-lg mb-2 block">PROJECT TYPE</label>
                  <Input
                    type="text"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    placeholder="ML System, AI App, Data Analysis..."
                    className="border-2 border-black font-bold"
                    required
                  />
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-4">
                <div className="manga-panel bg-gray-50 p-4 h-64">
                  <label className="manga-title text-lg mb-2 block">MISSION DETAILS</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={8}
                    placeholder="Describe your project, goals, timeline, and how we can create something amazing together..."
                    className="border-2 border-black font-bold resize-none h-full"
                    required
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="manga-title text-xl px-8 py-4 bg-red-600 hover:bg-red-700 text-white border-4 border-black shadow-lg transform hover:scale-105 transition-transform"
                  >
                    📨 SEND MESSAGE
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>

      {/* Final manga conclusion */}
      <div className="mt-8 text-center">
        <div className="manga-panel bg-gradient-to-r from-purple-100 to-pink-100 p-8 max-w-4xl mx-auto">
          <h3 className="manga-title text-4xl mb-4">TO BE CONTINUED...</h3>
          <p className="text-xl font-bold mb-4">
            ...in your inbox! 📧
          </p>
          <p className="text-lg">
            Every great collaboration starts with a single message. 
            Let's build the future of AI together!
          </p>
          
          {/* Final action effect */}
          <div className="flex justify-center mt-6 space-x-4">
            <div className="speech-bubble bg-blue-200 border-blue-600">
              <span className="font-bold">🤝 TEAM UP</span>
            </div>
            <div className="speech-bubble bg-green-200 border-green-600">
              <span className="font-bold">🚀 LAUNCH</span>
            </div>
            <div className="speech-bubble bg-purple-200 border-purple-600">
              <span className="font-bold">🌟 SUCCESS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background speed lines for finale */}
      <div className="speed-line absolute top-1/5 left-0 w-full transform rotate-3"></div>
      <div className="speed-line absolute top-2/5 left-0 w-full transform -rotate-2"></div>
      <div className="speed-line absolute top-3/5 left-0 w-full transform rotate-1"></div>
      <div className="speed-line absolute top-4/5 left-0 w-full transform -rotate-1"></div>
    </section>
  );
}