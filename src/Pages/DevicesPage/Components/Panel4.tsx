import { Box, Heading, Image, Text } from "@chakra-ui/react";
import image1 from "../../../assets/Rectangle 70.png";

const Panel4 = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} width={"full"}>
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        bgColor={"brand.500"}
        borderRadius={"38"}
        width={"50%"}
        padding={5}
      >
        <Heading fontFamily={"marcellus"} fontSize={"44px"}>
          WeSoil Sensor
        </Heading>
        <Box width={"full"} marginTop={10}>
          <Text fontFamily={"marcellus"} fontSize={"28px"}>
            <b>task :</b> Climate sensors
          </Text>
          <Text fontFamily={"marcellus"} fontSize={"28px"}>
            <b>energy used :</b> Electrical energy
          </Text>
          <Text fontFamily={"marcellus"} fontSize={"28px"}>
            <b>method :</b>
          </Text>
          <Text fontFamily={"marcellus"} fontSize={"22px"}>
            Our sensor possesses the unique capability of sensing temperature,
            wind speed, and humidity. These elements provide our system with
            essential climatic data needed to validate weather forecasts.
            Consequently, the system is empowered to generate accurate and
            necessary calculations, ensuring the protection of agricultural soil
            and achieving successful growth without causing any harm.
          </Text>
        </Box>
      </Box>
      <Box
        width={"45%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          src={image1}
          borderRadius={"38"}
          boxShadow={"-32px 43px 28px 0px rgba(0, 0, 0, 0.25)"}
        />
      </Box>
    </Box>
  );
};

export default Panel4;
