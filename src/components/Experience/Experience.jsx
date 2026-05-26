import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px]"></div>

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl font-bold text-white tracking-tight">
          Professional <span className="text-purple-500">Experience</span>
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          Building scalable real-world applications and modern digital
          experiences using full stack technologies.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative z-10">
        {/* Vertical Line */}
        <div className="absolute left-0 sm:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-transparent transform sm:-translate-x-1/2"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-16 ${
              index % 2 === 0
                ? "sm:justify-start"
                : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 sm:-translate-x-1/2 z-20">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-purple-500 bg-[#0d0d1a] shadow-[0_0_25px_rgba(130,69,236,0.5)] flex items-center justify-center overflow-hidden">
                {experience.img ? (
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-[80%] h-[80%] object-contain"
                  />
                ) : (
                  <span className="text-white font-bold text-sm">
                    {experience.company
                      ?.split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </span>
                )}
              </div>
            </div>

            {/* Card */}
            <div
              className={`ml-10 sm:ml-0 w-full sm:w-[45%] bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:border-purple-500/40 hover:shadow-[0_20px_50px_rgba(130,69,236,0.2)] transition-all duration-500 ${
                index % 2 === 0
                  ? "sm:mr-auto sm:pr-10"
                  : "sm:ml-auto sm:pl-10"
              }`}
            >
              {/* Current Badge */}
              {experience.date.includes("Present") && (
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">
                    Currently Working
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white">
                {experience.role}
              </h3>

              <h4 className="text-purple-400 font-medium mt-2">
                {experience.company}
              </h4>

              <p className="text-sm text-gray-500 mt-2">
                {experience.date}
              </p>

              <p className="mt-5 text-gray-400 leading-relaxed text-sm">
                {experience.desc}
              </p>

              {/* Skills */}
              <div className="mt-6">
                <h5 className="text-white font-semibold mb-3">
                  Tech Stack
                </h5>

                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;