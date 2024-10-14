import logo from "../assets/Beige and Black Modern Minimalist Cafe Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Left side: Logo and Description */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Atrium Café Logo"
            className="w-20 h-20 rounded-full border-2 border-yellow-500"
          />
          <div>
            <h3 className="text-xl font-bold">Atrium Café</h3>
            <p className="text-sm text-gray-400">
              A cozy place to unwind with great coffee and delicious treats.
            </p>
          </div>
        </div>

        {/* Center: Links */}
        <ul className="flex space-x-8 text-base">
          <li>
            <a href="#home" className="hover:text-yellow-500 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#menu" className="hover:text-yellow-500 transition-colors">
              Menu
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-yellow-500 transition-colors"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-yellow-500 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right side: Social Icons */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-500 transition-colors"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-500 transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-500 transition-colors"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        <p>&copy; 2024 Atrium Café. All rights reserved.</p>
        <p>Designed with ☕ in Toronto.</p>
      </div>
    </footer>
  );
};

export default Footer;
