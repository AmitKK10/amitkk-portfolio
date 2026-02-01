import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Experience</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Hands-on industry experience building real-world full stack
          applications with modern technologies.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 shadow-lg">
              {experience.img ? (
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-[80%] h-[80%] object-contain rounded-full"
                />
              ) : (
                <span className="text-sm sm:text-base font-bold text-[#8245ec]">
                  {experience.company
                    ?.split(" ")
                    .map((word) => word[0])
                    .join("")}
                </span>
              )}
            </div>

            {/* Content Card */}
            <div className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md sm:ml-44 sm:mr-44 ml-8 hover:scale-105 transition-transform">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {experience.role}
              </h3>
              <h4 className="text-sm text-gray-300 mt-1">
                {experience.company}
              </h4>
              <p className="text-sm text-gray-500 mt-2">
                {experience.date}
              </p>

              <p className="mt-4 text-gray-400">
                {experience.desc}
              </p>

              <div className="mt-4">
                <h5 className="font-medium text-white">Tech Stack:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-200 px-4 py-1 text-xs rounded-lg mr-2 mb-2"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
