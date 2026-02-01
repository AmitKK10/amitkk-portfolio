import React from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube, 
  FaFacebook, 
  FaXTwitter 
} from "react-icons/fa6"; // Using Fa6 for the latest icons like X
import { socialLinks } from "../../constants";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialIcons = [
    { icon: <FaGithub />, link: socialLinks.github, label: "GitHub" },
    { icon: <FaLinkedin />, link: socialLinks.linkedin, label: "LinkedIn" },
    { icon: <FaXTwitter />, link: socialLinks.twitter, label: "X (Twitter)" },
    { icon: <FaInstagram />, link: socialLinks.instagram, label: "Instagram" },
    { icon: <FaYoutube />, link: socialLinks.youtube, label: "YouTube" },
    { icon: <FaFacebook />, link: socialLinks.facebook, label: "Facebook" },
  ];

  return (
    <footer className="text-white py-12 px-[12vw] md:px-[7vw] lg:px-[20vw] border-t border-gray-800 bg-[#030014]">
      <div className="text-center">
        {/* Name with Gradient Glow */}
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 mb-2">
          Amit Kiran Kar
        </h2>
        <p className="text-gray-500 text-sm mb-6">Full-Stack Engineer & Founder</p>

        {/* Footer Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 mt-4 text-sm font-medium text-gray-400">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Achievements", id: "achievements" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons Grid */}
        <div className="flex justify-center flex-wrap gap-6 mt-8">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-2xl text-gray-400 hover:text-purple-500 transition-all duration-300 transform hover:scale-125"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="mt-10 pt-8 border-t border-gray-900">
          <p className="text-xs text-gray-600 tracking-widest uppercase">
            © {new Date().getFullYear()} Amit Kiran Kar. Built with Passion & Precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;