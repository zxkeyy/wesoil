import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import Picture from "../../../../assets/Rectangle 23.svg";
import Icon1 from "../../../../assets/Classification Learning.svg";
import Icon2 from "../../../../assets/Fertilizer Bag.svg";

const Slide2 = () => {
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
          <Image src={Picture} />
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
            fontSize={"24px"}
            textColor={"white"}
            textAlign={"start"}
          >
            Adapt the soil to your preferences and tailor it to your seeds'
            needs:
          </Heading>
          <Text
            marginTop={2}
            fontFamily={"marcellus"}
            fontSize={"15px"}
            textColor={"whiteAlpha.700"}
            textAlign={"start"}
          >
            Transforming soil to align with your preferences, creating an ideal
            environment tailored to nurture your seeds' optimal growth and
            potential.
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
            <Image src={Icon2} boxSize={"8"} />
          </Box>

          <Heading
            marginTop={2}
            fontFamily={"marcellus"}
            fontSize={"24px"}
            textColor={"white"}
            textAlign={"start"}
          >
            Effortlessly enhance soil fertility with a wide range of quality
            fertilizers.
          </Heading>
          <Text
            marginTop={2}
            fontFamily={"marcellus"}
            fontSize={"15px"}
            textColor={"whiteAlpha.700"}
            textAlign={"start"}
          >
            Easily fortify your soil with a variety of premium fertilizers,
            empowering well-informed farming choices.
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Slide2;
