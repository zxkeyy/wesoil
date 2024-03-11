import { Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import RenderIndicator from "./RenderIndicators";
import { PositionProps} from "@chakra-ui/react";

interface Props extends PositionProps {}

const InfoCarousel = (props: Props) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showArrows={false}
      renderIndicator={RenderIndicator}
      {...props}
      
    >
      <div key="slide1" style={{ paddingBottom: 60, paddingRight: 8 }}>
        <Slide1 />
      </div>
      <div key="slide2" style={{ paddingBottom: 60, paddingRight: 8 }}>
        <Slide2 />
      </div>
      <div key="slide3" style={{ paddingBottom: 60, paddingRight: 8 }}>
        <Slide3 />
      </div>
    </Carousel>
  );
};

export default InfoCarousel;
