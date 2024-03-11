import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./Slide";
import image1 from "../../../../assets/Rectangle 27.png";
import image2 from "../../../../assets/Rectangle 29.png";
import image3 from "../../../../assets/Rectangle 28.png";
import image4 from "../../../../assets/Rectangle 35.png";
import image5 from "../../../../assets/Rectangle 36.png";

const ServicesCarousel = () => {
  return (
    <Slider
      infinite
      autoplay
      autoplaySpeed={2000}
      slidesToShow={3}
      slidesToScroll={1}
    >
      <Slide image={image1} title="Eliminate poisonous insects" />
      <Slide image={image2} title="pH measurement" />
      <Slide image={image3} title="Soil smart irrigation" />
      <Slide image={image4} title="Soil fertilization" />
      <Slide image={image5} title="Bare soil" />
    </Slider>
  );
};

export default ServicesCarousel;
