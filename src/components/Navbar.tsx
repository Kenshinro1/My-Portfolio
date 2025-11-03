import type { JSX } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar(): JSX.Element {
  const navItems = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-xl font-bold cursor-pointer transition-all duration-500"
          onClick={() => scroll.scrollToTop({ duration: 500 })}
        >
          <span className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 transition-all duration-500">
            Clarence Kenneth Acedillo
          </span>
        </h1>
        <ul className="flex space-x-6 items-center">
          {navItems.map((item) => (
            <li key={item.to} className="cursor-pointer">
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="relative font-semibold transition-all duration-500"
              >
                <span className="relative inline-block">
                  <span className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 transition-all duration-500">
                    {item.label}
                  </span>
                </span>
              </Link>
            </li>
          ))}
          <li>
            <a
              href="Clarence-Kenneth-Acedillo_Resume.pdf" 
              download="ClarenceKennethAcedillo_CV.pdf"
              className="px-4 py-2 font-semibold rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 text-white hover:opacity-90 transition duration-300"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
