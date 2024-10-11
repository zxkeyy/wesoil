import { Avatar, Box, BoxProps, Text } from "@chakra-ui/react";
import avatar1 from "../../../assets/17.png";

interface Props extends BoxProps {}

const Member2 = (props: Props) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"full"}
      {...props}
    >
      <Box
        bgColor={"brand.500"}
        fontFamily={"marcellus"}
        fontSize={"30px"}
        padding={5}
        borderRadius={"38"}
        width={"50%"}
      >
        <Text>
          <b>Name :</b> Elaziz Dhia eddine
        </Text>
        <Text>
          <b>Education :</b> Estin, Béjaïa
        </Text>
        <Text>
          <b>Skills :</b>
        </Text>
        <Text paddingX={10}>
          -front-end developer
          <br /> -designer
          <br /> -leading
          <br /> -team working
          <br />
          -curiosity
          <br />
          -passion
        </Text>
      </Box>
      <Box display={"flex"} justifyContent={"end"}>
        <Avatar
          src={avatar1}
          boxSize={"80%"}
          boxShadow={"-36px 31px 56px 0px rgba(0, 0, 0, 0.25);"}
        />
      </Box>
    </Box>
  );
};

export default Member2;
