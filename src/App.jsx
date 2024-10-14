// src/App.jsx

import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import AboutUs from "./Components/AboutUs";
import Menu from "./Components/Menu";
import Testimonials from "./Components/Testimonials";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Menu />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
