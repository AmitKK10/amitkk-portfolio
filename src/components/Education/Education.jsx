import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Education</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Academic background with strong focus on computer science fundamentals
          and software development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Icon / Logo */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 shadow-lg">
              {edu.img ? (
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="max-w-[80%] max-h-[80%] object-contain"
                />
              ) : (
                <span className="text-2xl">🎓</span>
              )}
            </div>

            {/* Education Card */}
            <div className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md sm:ml-44 sm:mr-44 ml-8 hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-white">
                {edu.degree}
              </h3>
              <h4 className="text-sm text-gray-300">
                {edu.school}
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                {edu.date}
              </p>

              <p className="mt-3 text-gray-400 font-semibold">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-gray-400">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
