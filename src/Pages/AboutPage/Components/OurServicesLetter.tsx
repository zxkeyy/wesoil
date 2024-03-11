import { Box, Heading, Text } from "@chakra-ui/react";
import Letter from "../../../assets/letter.png";

const OurServicesLetter = () => {
  return (
    <Box
      height={"423px"}
      width={"716px"}
      position={"absolute"}
      left={0}
      top={0}
      backgroundImage={Letter}
      backgroundSize={"cover"}
      paddingX={7}
      paddingY={14}
      zIndex={0}
    >
      <Heading fontFamily={"inter"} fontSize={"60px"} textColor={"white"}>
        Our services:
      </Heading>
      <Text
        fontFamily={"inter"}
        fontSize={"25px"}
        lineHeight={"30px"}
        textColor={"white"}
        marginTop={5}
      >
        Our platform offers farmers a unique window into their soil's
        characteristics and changes. Through advanced technology and
        user-friendly interfaces, you'll gain crucial insights for more informed
        and effective agricultural decisions.
      </Text>
    </Box>
  );
};

export default OurServicesLetter;
