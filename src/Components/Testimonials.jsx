const testimonials = [
  { name: "John Doe", feedback: "The coffee here is amazing!" },
  {
    name: "Jane Smith",
    feedback: "A wonderful atmosphere to relax and enjoy.",
  },
  {
    name: "Emily Johnson",
    feedback: "The best coffee shop in town, hands down!",
  },
  { name: "Michael Brown", feedback: "Great service and even better coffee!" },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Customer Reviews</h2>
        <p className="text-lg text-gray-300 mb-12">
          What our customers are saying about Atrium.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {testimonials.map((testimony, index) => (
            <div
              key={index}
              className="p-8 bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 relative"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-0 left-0 mt-[-2rem] ml-[-2rem]">
                <svg
                  className="w-16 h-16 text-brown-500 opacity-20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
              </div>

              <p className="text-lg italic leading-relaxed">
                "{testimony.feedback}"
              </p>
              <h4 className="mt-6 text-2xl font-semibold text-white">
                {testimony.name}
              </h4>
              <div className="mt-4">
                <span className="inline-block bg-brown-600 text-white py-1 px-3 rounded-full text-xs font-semibold">
                  Verified Customer
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
