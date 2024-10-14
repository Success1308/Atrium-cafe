import logo from "../assets/Beige and Black Modern Minimalist Cafe Logo.png";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-6 flex justify-center items-center shadow-lg border-b-4 border-yellow-500">
      <nav>
        <ul className="flex space-x-12 justify-center items-center font-semibold">
          <li>
            <a
              href="#home"
              className="relative group hover:text-yellow-500 transition-colors duration-300 text-3xl"
            >
              Home
              <span className="block h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
            </a>
          </li>

          <li>
            <a
              href="#menu"
              className="relative group hover:text-yellow-500 transition-colors duration-300 text-3xl"
            >
              Menu
              <span className="block h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
            </a>
          </li>

          {/* Logo in the center with margin */}
          <li className="flex justify-center items-center mx-8">
            {" "}
            {/* Added mx-8 for extra margin */}
            <img
              src={logo}
              alt="Atrium Café Logo"
              className="w-28 h-28 rounded-full border-2 border-yellow-500 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </li>

          <li>
            <a
              href="#about"
              className="relative group hover:text-yellow-500 transition-colors duration-300 text-3xl"
            >
              About
              <span className="block h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="relative group hover:text-yellow-500 transition-colors duration-300 text-3xl"
            >
              Contact
              <span className="block h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
