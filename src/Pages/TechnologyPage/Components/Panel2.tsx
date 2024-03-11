import { Box, BoxProps, Heading, Image, Text } from "@chakra-ui/react";
import image1 from "../../../assets/Rectangle 73.png";
import image2 from "../../../assets/Rectangle 74.png";

interface Props extends BoxProps {}
const Panel2 = (props: Props) => {
  return (
    <Box {...props}>
      <Heading fontFamily={"marcellus"} fontSize={"44px"}>
        <Box
          boxSize={5}
          borderRadius={"full"}
          bgColor={"black"}
          display={"inline-block"}
          verticalAlign={"middle"}
        ></Box>
        IOT System In Agriculture :(Internet Of Things)
      </Heading>
      <Box display={"flex"} justifyContent={"space-between"} marginTop={6}>
        <Box width={"50%"}>
          <Image
            src={image1}
            height={"40%"}
            borderRadius={"38"}
            boxShadow={"-32px 43px 28px 0px rgba(0, 0, 0, 0.25)"}
          />
          <Image
            src={image2}
            height={"40%"}
            borderRadius={"38"}
            boxShadow={"-32px 43px 28px 0px rgba(0, 0, 0, 0.25)"}
            marginTop={10}
          />
        </Box>
        <Box width={"50%"}>
          <Text fontFamily={"marcellus"} fontSize={"27px"} padding={2}>
            The IoT Agriculture System is a transformative solution that
            leverages the power of the Internet of Things in farming. By
            connecting sensors, devices, and equipment, this system creates a
            network that provides farmers with real-time data on various aspects
            of their fields. From soil moisture and temperature to crop health
            and irrigation, the IoT Agriculture System offers a comprehensive
            view of the farm's operations. This connectivity enables smarter
            decision-making, efficient resource utilization, and ultimately,
            higher yields. Embracing this technology means embracing a new era
            of precision and productivity in agriculture.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Panel2;
