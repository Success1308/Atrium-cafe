import QC from "../assets/QC.jpeg";
import ps from "../assets/ps.jpeg";
import bc from "../assets/bc.jpeg";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-100 to-gray-50 text-gray-900"
    >
      <div className="container mx-auto text-center px-4 md:px-8">
        {/* Heading with a more pronounced shadow and upscale animation */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-10 text-brown-700 cursor-pointer drop-shadow-lg transition-transform duration-500 transform hover:scale-110">
          Discover Atrium Café
        </h2>

        {/* Main description with a more refined fade-in and text emphasis */}
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-800 animate-fadeIn">
          Step into Atrium Café, where the rich aroma of freshly brewed coffee
          welcomes you into an ambiance of warmth and comfort. We are devoted to
          bringing you the finest quality coffee and delightful pastries,
          crafted with passion to make every moment at Atrium Café one to savor
          and remember.
        </p>

        {/* Elegant divider */}
        <div className="w-24 h-1 bg-brown-700 mx-auto my-12"></div>

        {/* Mission Section */}
        <div className="mt-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wider underline decoration-brown-600">
            Our Mission
          </h3>
          <p className="mt-6 text-base md:text-lg max-w-xl mx-auto leading-relaxed text-gray-700">
            Atrium Café is more than just a coffee shop; it's a community hub.
            We aim to create a welcoming space where friends, family, and
            colleagues gather to enjoy exceptional food and beverages while
            building lasting connections.
          </p>

          {/* Enhanced icon section with hover effects and more luxurious visuals */}
          <div className="mt-16 flex flex-col md:flex-row justify-center gap-8">
            <div className="p-8 md:p-10 bg-white rounded-full shadow-xl transition-all hover:bg-brown-50 hover:scale-105">
              <img
                src={QC}
                alt="Quality Coffee"
                className="w-42 h-42 md:w-48 md:h-48 mx-auto rounded-full border-2 border-yellow-500 cursor-pointer"
              />
              <p className="mt-4 text-lg text-gray-800 font-semibold">
                Quality Coffee
              </p>
              <p className="text-sm text-gray-600">
                Freshly brewed with passion
              </p>
            </div>

            <div className="p-8 md:p-10 bg-white rounded-full shadow-xl transition-all hover:bg-brown-50 hover:scale-105">
              <img
                src={ps}
                alt="Delicious Pastries"
                className="w-42 h-42 md:w-48 md:h-48 mx-auto rounded-full border-2 border-yellow-500 cursor-pointer"
              />
              <p className="mt-4 text-lg text-gray-800 font-semibold">
                Delicious Pastries
              </p>
              <p className="text-sm text-gray-600">
                Handcrafted and freshly baked
              </p>
            </div>

            <div className="p-8 md:p-10 bg-white rounded-full shadow-xl transition-all hover:bg-brown-50 hover:scale-105">
              <img
                src={bc}
                alt="Building Community"
                className="w-42 h-42 md:w-48 md:h-48 mx-auto rounded-full border-2 border-yellow-500 cursor-pointer"
              />
              <p className="mt-4 text-lg text-gray-800 font-semibold">
                Building Community
              </p>
              <p className="text-sm text-gray-600">
                Creating memories together
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
