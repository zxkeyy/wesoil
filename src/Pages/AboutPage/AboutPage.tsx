import { Box } from "@chakra-ui/react";
import Hero from "../../Components/Hero";
import InfoBar from "../../Components/InfoBar";
import AboutUd from "./Components/AboutUd";
import InfoCarousel from "./Components/InfoCarousel/InfoCarousel";
import OurServicesLetter from "./Components/OurServicesLetter";
import ReviewsPanel from "./Components/ReviewsPanel";
import ServicesCarousel from "./Components/ServisesCarousel/ServicesCarousel";

const AboutPage = () => {
  return (
    <>
      <Box bg={"brand.600"} width={"65%"} minWidth={"1200px"}>
        <Hero />
        <InfoBar marginTop={10} />
        <AboutUd marginTop={32} />
        <Box marginTop={24}>
          <InfoCarousel />
        </Box>

        <Box width={"full"} height={800} position={"relative"}>
          <Box zIndex={10} position={"relative"} top={"300"}>
            <ServicesCarousel />
          </Box>

          <OurServicesLetter />
        </Box>
      </Box>
      <Box minWidth={"1200px"} width={"100%"}>
        <ReviewsPanel/>
      </Box>
    </>
  );
};

export default AboutPage;
