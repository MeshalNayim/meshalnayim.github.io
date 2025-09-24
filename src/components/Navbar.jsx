import React, { useEffect, useState } from "react";

export default function Navbar() {
  const links = [
    { name: "Home", href: "#hero" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Publications", href: "#pub" },
    { name: "Contact", href: "#contact" },
  ];

  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // section should be 50% visible to count
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-md">
      <div className="w-full px-6 py-4 flex justify-between items-center">

        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Meshal Nayim
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-teal-300"
                    : "hover:text-teal-300"
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-300"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
