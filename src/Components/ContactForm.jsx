const ContactForm = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-100"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <form className="mt-8 max-w-lg mx-auto bg-white p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-yellow-500 transition-shadow shadow-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-yellow-500 transition-shadow shadow-sm"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-yellow-500 transition-shadow shadow-sm resize-none"
          ></textarea>
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-transform transform hover:scale-105 shadow-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
