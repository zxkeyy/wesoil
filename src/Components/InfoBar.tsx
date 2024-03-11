import { Box, BoxProps, Image, Text } from "@chakra-ui/react";
import Humidity from "../assets/Water Drop.svg";
import Bomb from "../assets/Bomb.svg";
import Oxygen from "../assets/Oxygen Tank.svg";
import Toxic from "../assets/Vector.svg";
import Nutrients from "../assets/Rickshaw.svg";

interface Props extends BoxProps {}

const InfoBar = (props: Props) => {
  return (
    <Box
      borderRadius={44}
      bgColor={"brand.900"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={20}
      paddingY={1}
      height={"100"}
      {...props}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}
      >
        <Image src={Humidity} height={"50%"}></Image>
        <Text
          marginTop={"1%"}
          fontFamily={"inter"}
          fontSize={"18"}
          textColor={"whiteAlpha.700"}
        >
          Soil Humidity
        </Text>
      </Box>
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}
      >
        <Image src={Bomb} height={"50%"}></Image>
        <Text
          marginTop={"1%"}
          fontFamily={"inter"}
          fontSize={"18"}
          textColor={"whiteAlpha.700"}
        >
          Acidity
        </Text>
      </Box>
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}
      >
        <Image src={Oxygen} height={"50%"}></Image>
        <Text
          marginTop={"1%"}
          fontFamily={"inter"}
          fontSize={"18"}
          textColor={"whiteAlpha.700"}
        >
          Soil aeration
        </Text>
      </Box>
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}
      >
        <Image src={Toxic} height={"50%"}></Image>
        <Text
          marginTop={"1%"}
          fontFamily={"inter"}
          fontSize={"18"}
          textColor={"whiteAlpha.700"}
        >
          Toxic compound
        </Text>
      </Box>
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}
      >
        <Image src={Nutrients} height={"50%"}></Image>
        <Text
          marginTop={"1%"}
          fontFamily={"inter"}
          fontSize={"18"}
          textColor={"whiteAlpha.700"}
        >
          Nutrients
        </Text>
      </Box>
    </Box>
  );
};

export default InfoBar;
