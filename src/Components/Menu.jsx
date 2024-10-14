import es from "../assets/es.jpeg";
import ca from "../assets/ca.jpeg";
import la from "../assets/la.jpeg";
import mo from "../assets/mo.jpeg";
import cam from "../assets/cam.jpeg";
import ic from "../assets/ic.jpeg";
import ivl from "../assets/ivl.jpeg";
import cc from "../assets/cc.jpeg";

// Adding descriptions to the menu items
const menuItems = [
  {
    name: "Espresso",
    price: "$3",
    image: es,
    description: "Rich and bold espresso.",
  },
  {
    name: "Cappuccino",
    price: "$4",
    image: ca,
    description: "A creamy classic with frothy milk.",
  },
  {
    name: "Latte",
    price: "$4.5",
    image: la,
    description: "Smooth espresso with steamed milk.",
  },
  {
    name: "Mocha",
    price: "$5",
    image: mo,
    description: "Chocolatey espresso treat.",
  },
  {
    name: "Caramel Macchiato",
    price: "$4.5",
    image: cam,
    description: "Espresso with caramel goodness.",
  },
  {
    name: "Iced Coffee",
    price: "$3.5",
    image: ic,
    description: "Chilled coffee, refreshing and smooth.",
  },
  {
    name: "Vanilla Latte",
    price: "$4.5",
    image: ivl,
    description: "Sweet vanilla flavor and creamy texture.",
  },
  {
    name: "Chocolate Croissant",
    price: "$2.5",
    image: cc,
    description: "Buttery croissant with rich chocolate filling.",
  },
];

const Menu = () => {
  return (
    <section
      id="menu"
      className="py-20 bg-gradient-to-br from-brown-600 to-brown-700"
    >
      {/* Gradient background */}
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-black tracking-wide">
          Atrium Menu
        </h2>
        <p className="mt-2 text-lg text-brown-200 tracking-wide">
          Freshly brewed coffee and delightful treats!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 group relative"
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-contain rounded-md transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                <p className="text-lg font-bold text-brown-600 mt-4">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
