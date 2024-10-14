import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  const images = [hero1, hero2];

  return (
    <section
      id="home"
      className="h-[70vh] md:h-[70vh] sm:h-[30vh] h-[30vh] xs:h-[40vh] lg:h-[90vh] relative border-b-4 border-yellow-500 z-10 "
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="h-[70vh] md:h-[70vh] sm:h-[30vh] h-[30vh] xs:h-[40vh] lg:h-[90vh] bg-contain bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="h-[70vh] md:h-[70vh] sm:h-[30vh] h-[30vh] xs:h-[40vh] lg:h-[90vh] flex flex-col justify-center items-center bg-black bg-opacity-50"></div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
