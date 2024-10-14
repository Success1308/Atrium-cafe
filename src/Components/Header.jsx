import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/Beige and Black Modern Minimalist Cafe Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled"); // Debugging log
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-gray-800 text-white p-6 flex justify-between items-center shadow-lg border-b-4 border-yellow-500 relative">
      <nav className="flex-1">
        <div className="hidden md:flex space-x-12 justify-center items-center font-semibold">
          <a
            href="#home"
            className="relative group hover:text-yellow-500 transition-colors duration-300 text-3xl"
          >
            Home
            <span className="block h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </a>

          <a
            href="#menu"
            className="relative group hover:text-yellow-500 transition-colors duration-300 text-3xl"
          >
            Menu
            <span className="block h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </a>
          <img
            src={logo}
            alt="Atrium Café Logo"
            className="w-28 h-28 rounded-full border-2 border-yellow-500 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          <a
            href="#about"
            className="relative group hover:text-yellow-500 transition-colors duration-300 text-3xl"
          >
            About
            <span className="block h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </a>

          <a
            href="#contact"
            className="relative group hover:text-yellow-500 transition-colors duration-300 text-3xl"
          >
            Contact
            <span className="block h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </a>
        </div>

        {/* Mobile menu toggle section */}
        <div className="md:hidden flex items-center justify-between p-4">
          <img
            src={logo}
            alt="Atrium Café Logo"
            className="w-20 h-20 rounded-full border-2 border-yellow-500 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          {/* Mobile menu toggle button */}
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="ml-4"
          >
            {isOpen ? (
              <FiX className="text-white w-6 h-6 hover:text-yellow-500 transition duration-300" />
            ) : (
              <FiMenu className="text-white w-6 h-6 hover:text-yellow-500 transition duration-300" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-34 left-0 w-full p-4 flex flex-col items-center bg-gray-800 border-t border-yellow-500 space-y-2 z-20">
            <a
              href="#home"
              className="text-white font-semibold hover:text-yellow-500 transition duration-300 text-lg"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#menu"
              className="text-white font-semibold hover:text-yellow-500 transition duration-300 text-lg"
              onClick={toggleMenu}
            >
              Menu
            </a>
            <a
              href="#about"
              className="text-white font-semibold hover:text-yellow-500 transition duration-300 text-lg"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white font-semibold hover:text-yellow-500 transition duration-300 text-lg"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
