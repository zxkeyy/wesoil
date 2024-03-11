import { Avatar, Box, BoxProps, Text } from "@chakra-ui/react";
import avatar1 from "../../../assets/Ellipse 35 (1).png";

interface Props extends BoxProps {}

const Member1 = (props: Props) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"full"}
      {...props}
    >
      <Box>
        <Avatar
          src={avatar1}
          boxSize={"80%"}
          boxShadow={"-36px 31px 56px 0px rgba(0, 0, 0, 0.25);"}
        />
      </Box>

      <Box
        bgColor={"brand.500"}
        fontFamily={"marcellus"}
        fontSize={"30px"}
        padding={5}
        borderRadius={"38"}
        width={"50%"}
      >
        <Text>
          <b>Name :</b> Boubechiche Youssouf
        </Text>
        <Text>
          <b>Education :</b> Estin, Béjaïa
        </Text>
        <Text>
          <b>Skills :</b>
        </Text>
        <Text paddingX={10}>
          -Graphique, UI/UX and logo designer
          <br /> -Web designer
          <br /> -Front -end developer
          <br /> -creativity
          <br /> -team working
          <br /> -curiosity
        </Text>
      </Box>
    </Box>
  );
};

export default Member1;
