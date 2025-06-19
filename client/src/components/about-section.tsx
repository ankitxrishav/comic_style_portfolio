export default function AboutSection() {
  return (
    <section id="about" className="section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A passionate ML engineer with expertise in developing scalable AI solutions that drive business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              I'm a Machine Learning Engineer with over 5 years of experience in building and deploying
              production-ready ML systems. My journey started with a fascination for data patterns and
              has evolved into creating intelligent solutions that solve complex business problems.
            </p>

            <p className="text-lg text-slate-700">
              I specialize in deep learning, computer vision, natural language processing, and MLOps.
              My work spans across various industries including healthcare, finance, and e-commerce,
              where I've successfully deployed models serving millions of users.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-blue-600"></i>
                  <span>Deep Learning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-blue-600"></i>
                  <span>Computer Vision</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-blue-600"></i>
                  <span>NLP & LLMs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-blue-600"></i>
                  <span>MLOps & Deployment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-blue-600"></i>
                  <span>Python & TensorFlow</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-blue-600"></i>
                  <span>Cloud Platforms</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600"
              alt="Ankit Kumar - ML Engineer"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
            />

            <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
              <h4 className="text-xl font-semibold">Education</h4>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold">M.S. in Computer Science</div>
                  <div className="text-slate-600">Stanford University</div>
                  <div className="text-sm text-slate-500">2018-2020</div>
                </div>
                <div>
                  <div className="font-semibold">B.Tech in Computer Engineering</div>
                  <div className="text-slate-600">IIT Delhi</div>
                  <div className="text-sm text-slate-500">2014-2018</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
