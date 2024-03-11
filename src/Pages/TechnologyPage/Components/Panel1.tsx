import { Box, BoxProps, Heading, Image, Text } from "@chakra-ui/react";
import image1 from "../../../assets/Rectangle 72.png";

interface Props extends BoxProps {}

const Panel1 = (props: Props) => {
  return (
    <Box {...props} display={"flex"} justifyContent={"space-between"}>
      <Box width={"45%"}>
        <Heading fontFamily={"marcellus"} fontSize={"44px"}>
          <Box
            boxSize={5}
            borderRadius={"full"}
            bgColor={"black"}
            display={"inline-block"}
            verticalAlign={"middle"}
          ></Box>
          Ai Agriculture System :
        </Heading>
        <Text fontFamily={"marcellus"} fontSize={"27px"} padding={2}>
          The AI Agriculture System is a groundbreaking innovation that brings
          cutting-edge technology to farming. Using advanced sensors and
          intelligent algorithms, this system revolutionizes how we understand
          and care for crops. It provides real-time insights into soil
          conditions, weather patterns, and plant health, allowing farmers to
          make informed decisions for optimal growth. With automated processes
          and precise resource management, the AI Agriculture System maximizes
          yields while promoting sustainability. It's a game-changer for modern
          agriculture, ensuring smarter farming practices and a more productive
          future.
        </Text>
      </Box>
      <Box width={"45%"}>
        <Image
          src={image1}
          borderRadius={"38"}
          boxShadow={"-32px 43px 28px 0px rgba(0, 0, 0, 0.25)"}
          marginTop={20}
        />
      </Box>
    </Box>
  );
};

export default Panel1;
