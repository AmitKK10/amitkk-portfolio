import React from "react";
import { achievements } from "../../constants";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Achievements</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Coding excellence, certifications, and academic achievements with proof.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-white rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-purple-400 font-medium mt-1">
                {item.subtitle}
              </p>

              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Action Row */}
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs bg-[#251f38] text-purple-400 px-3 py-1 rounded-full">
                {item.highlight}
              </span>

              {/* View Link / Proof */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-purple-400"
                >
                  View →
                </a>
              )}

              {item.proof && (
                <a
                  href={item.proof}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-400 hover:underline"
                >
                  View Proof
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
