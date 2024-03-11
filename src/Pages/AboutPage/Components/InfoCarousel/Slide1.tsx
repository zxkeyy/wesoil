import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { FaHandHoldingMedical } from "react-icons/fa";
import Picture from "../../../../assets/Rectangle 22.png";
import Icon1 from "../../../../assets/Analysis.svg";

const Slide1 = () => {
  return (
    <Grid
      templateAreas={`"image info1"
                  "image info2"`}
      gridTemplateColumns={"0.6fr 0.4fr"}
      gridTemplateRows={"0.5fr 0.5fr"}
      height={"500px"}
    >
      <GridItem area={"image"}>
        <Box
          boxShadow={"-20px 20px 18px 0px rgba(0, 0, 0, 0.25);"}
          marginLeft={8}
        >
          <Image src={Picture} height={"full"} />
        </Box>
      </GridItem>
      <GridItem area={"info1"}>
        <Box
          bgColor={"brand.900"}
          boxShadow={"-20px 20px 18px 0px rgba(0, 0, 0, 0.25);"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"start"}
          padding={5}
          marginLeft={10}
        >
          <Box>
            <Image src={Icon1} boxSize={"8"} />
          </Box>

          <Heading
            marginTop={2}
            fontFamily={"marcellus"}
            fontSize={"25px"}
            textColor={"white"}
            textAlign={"start"}
          >
            An elaborate and comprehensive analysis of your soil:
          </Heading>
          <Text
            marginTop={2}
            fontFamily={"marcellus"}
            fontSize={"15px"}
            textColor={"whiteAlpha.700"}
            textAlign={"start"}
          >
            We analyze your soil through advanced techniques, revealing
            intricate details for informed agricultural decisions
          </Text>
        </Box>
      </GridItem>
      <GridItem area={"info2"}>
        <Box
          bgColor={"brand.900"}
          boxShadow={"-20px 20px 18px 0px rgba(0, 0, 0, 0.25);"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"start"}
          padding={5}
          marginLeft={10}
        >
          <Box color="white">
            <FaHandHoldingMedical size={"30"} />
          </Box>

          <Heading
            marginTop={2}
            fontFamily={"marcellus"}
            fontSize={"25px"}
            textColor={"white"}
            textAlign={"start"}
          >
            Expertly and skillfully treating the soil:
          </Heading>
          <Text
            marginTop={2}
            fontFamily={"marcellus"}
            fontSize={"15px"}
            textColor={"whiteAlpha.700"}
            textAlign={"start"}
          >
            Employing the utmost precision, finesse, and extensive expertise in
            the art of soil cultivation and care
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Slide1;
