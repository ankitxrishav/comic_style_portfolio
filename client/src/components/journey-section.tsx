export default function JourneySection() {
  const timelineItems = [
    {
      title: "Senior ML Engineer",
      company: "Google AI",
      period: "2022 - Present",
      description: "Leading ML infrastructure development for large-scale recommendation systems. Managing a team of 5 engineers and driving technical strategy for next-gen AI products.",
      tags: ["TensorFlow", "Kubernetes", "Leadership"],
      side: "right"
    },
    {
      title: "ML Engineer",
      company: "Netflix",
      period: "2020 - 2022",
      description: "Built and deployed recommendation algorithms serving 200M+ users. Improved content discovery metrics by 30% through advanced deep learning techniques.",
      tags: ["PyTorch", "Apache Spark", "A/B Testing"],
      side: "left"
    },
    {
      title: "Data Scientist",
      company: "Uber",
      period: "2018 - 2020",
      description: "Developed pricing optimization models and demand forecasting systems. Led data science initiatives for driver allocation and route optimization.",
      tags: ["Scikit-learn", "SQL", "Statistics"],
      side: "right"
    },
    {
      title: "Research Intern",
      company: "Stanford AI Lab",
      period: "2017 - 2018",
      description: "Conducted research on computer vision applications in healthcare. Published 3 papers on medical image analysis using deep learning.",
      tags: ["Research", "Computer Vision", "Publications"],
      side: "left"
    }
  ];

  return (
    <section id="journey" className="section py-20 bg-gradient-to-br from-slate-900 via-pink-900/20 to-slate-800 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">🛤️ My Journey</h2>
          <p className="text-xl text-pink-200 max-w-3xl mx-auto leading-relaxed">
            From curious innovator to AI pioneer - witness the evolution of cutting-edge expertise.
          </p>
        </div>

        <div className="relative timeline-item">
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                {item.side === "right" ? (
                  <>
                    <div className="w-full md:w-1/2 text-right md:pr-8">
                      <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
                        <div className="flex items-center justify-end space-x-2">
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                          <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                        </div>
                        <div className="text-cyan-600 font-medium">{item.company} • {item.period}</div>
                        <p className="text-slate-600">{item.description}</p>
                        <div className="flex flex-wrap gap-2 justify-end">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-blue-600 text-white px-2 py-1 rounded text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2"></div>
                  </>
                ) : (
                  <>
                    <div className="w-full md:w-1/2"></div>
                    <div className="w-full md:w-1/2 md:pl-8">
                      <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                        </div>
                        <div className="text-cyan-600 font-medium">{item.company} • {item.period}</div>
                        <p className="text-slate-600">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-blue-600 text-white px-2 py-1 rounded text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
