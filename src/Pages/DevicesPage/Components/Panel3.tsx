import { Box, Heading, Image, Text } from "@chakra-ui/react";
import image1 from "../../../assets/Rectangle 68.png";

const Panel3 = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} width={"full"}>
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
          WeSoil Irrigation system
        </Heading>
        <Box width={"full"} marginTop={10}>
          <Text fontFamily={"marcellus"} fontSize={"28px"}>
            <b>task :</b> Irrigation
          </Text>
          <Text fontFamily={"marcellus"} fontSize={"28px"}>
            <b>energy used :</b> Water pressure
          </Text>
          <Text fontFamily={"marcellus"} fontSize={"28px"}>
            <b>method :</b>
          </Text>
          <Text fontFamily={"marcellus"} fontSize={"22px"}>
            The robot conducts five regular patrols during the crop's growth
            period, a schedule determined by our system based on the type of
            planted crop. The robot measures various components of agricultural
            soil (air and CO2 levels, acidity, toxic substances, and mineral
            salts). Additionally, it identifies various harmful weeds, all made
            possible through its sophisticated sensors and its ability to
            traverse farmlands. At the end of each patrol, the collected data is
            transmitted to the system, which processes the information according
            to its programmed methodology.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Panel3;
