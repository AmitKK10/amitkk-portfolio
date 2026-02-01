import React, { useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Disable background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[7vw] lg:px-[15vw] font-sans relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] -z-10"></div>

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white tracking-tight">
          Featured <span className="text-purple-500">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          Engineering scalable Fintech solutions and real-time architectures 
          with the MERN stack.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_20px_50px_rgba(130,69,236,0.2)]"
          >
            {/* Image Container with fixed Aspect Ratio */}
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-4 line-clamp-2 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

{/* Premium Project Modal */}
{selectedProject && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-8">
    {/* Backdrop */}
    <div 
      className="absolute inset-0 bg-[#030014]/98 backdrop-blur-md" 
      onClick={handleCloseModal}
    ></div>
    
    <div className="relative bg-[#0d0d1a] border border-white/10 rounded-3xl shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-y-auto custom-scrollbar overflow-x-hidden">
      
      {/* STICKY HEADER FOR MOBILE CROSS BUTTON */}
      <div className="sticky top-0 right-0 z-[110] flex justify-end p-4 pointer-events-none">
        <button
          onClick={handleCloseModal}
          className="pointer-events-auto w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-red-500/20 hover:text-red-500 rounded-full text-white transition-all backdrop-blur-md border border-white/10"
        >
          <span className="text-2xl leading-none">&times;</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row -mt-14"> {/* Negative margin to pull content back up under sticky button */}
        {/* Image Side */}
        <div className="lg:w-1/2 flex items-center justify-center bg-black/20 p-4">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-auto max-h-[60vh] lg:max-h-full object-contain rounded-xl"
          />
        </div>

        {/* Content Side */}
        <div className="lg:w-1/2 p-6 md:p-12 flex flex-col">
          <span className="text-purple-500 font-bold tracking-[0.2em] text-[10px] mb-2 uppercase">
            Engineering Case Study
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            {selectedProject.title}
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
            {selectedProject.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {selectedProject.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-md text-xs text-purple-300">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold text-center transition-all border border-white/10 text-sm"
            >
              Source Code
            </a>
            <a
              href={selectedProject.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-center shadow-[0_10px_20px_rgba(147,51,234,0.3)] transition-all text-sm"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
         </section>
  );
};

export default Work;