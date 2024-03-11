import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import Picture from "../../../../assets/Rectangle 39.svg";
import Icon1 from "../../../../assets/Water Drop2.svg";
import Icon2 from "../../../../assets/Plant In Soil.svg";

const Slide3 = () => {
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
            fontSize={"22px"}
            textColor={"white"}
            textAlign={"start"}
          >
            Efficiently irrigate crops with precision, minimizing any wastage of
            water.
          </Heading>
          <Text
            marginTop={2}
            fontFamily={"marcellus"}
            fontSize={"15px"}
            textColor={"whiteAlpha.700"}
            textAlign={"start"}
          >
            Revolutionize crop irrigation with unparalleled precision, ensuring
            minimal water wastage and maximum efficiency.
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
            fontSize={"22px"}
            textColor={"white"}
            textAlign={"start"}
          >
            Control agricultural soil moisture based on climate and planted
            crops.
          </Heading>
          <Text
            marginTop={2}
            fontFamily={"marcellus"}
            fontSize={"15px"}
            textColor={"whiteAlpha.700"}
            textAlign={"start"}
          >
            Customize soil moisture to suit climate and crop needs, driven by
            advanced analysis.
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Slide3;
