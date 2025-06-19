import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
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
    // TODO: Implement form submission logic
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I'll get back to you soon.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="section py-20 bg-gradient-to-br from-slate-900 via-cyan-900/20 to-slate-800 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">💬 Let's Connect</h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
            Ready to revolutionize your AI strategy? Let's build the future together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Get In Touch</h3>
              <p className="text-slate-300">
                Whether you're looking to discuss a project, explore collaboration opportunities,
                or just want to chat about the latest in ML, I'm always open to connecting with
                fellow enthusiasts and professionals.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-cyan-400 text-xl"></i>
                <span>ankit.kumar@email.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-phone text-cyan-400 text-xl"></i>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-cyan-400 text-xl"></i>
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <i className="fab fa-medium text-2xl"></i>
              </a>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="bg-white/10 border-white/20 text-white placeholder-slate-300 focus:border-cyan-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="bg-white/10 border-white/20 text-white placeholder-slate-300 focus:border-cyan-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="bg-white/10 border-white/20 text-white placeholder-slate-300 focus:border-cyan-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Collaboration"
                  className="bg-white/10 border-white/20 text-white placeholder-slate-300 focus:border-cyan-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="bg-white/10 border-white/20 text-white placeholder-slate-300 focus:border-cyan-400 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
