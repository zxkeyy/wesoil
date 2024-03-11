import { Box, Heading } from "@chakra-ui/react";
import Member1 from "./Components/Member1";
import Member2 from "./Components/Member2";
import Member3 from "./Components/Member3";

const TeamPage = () => {
  return (
    <Box bg={"brand.600"} width={"65%"}>
      <Heading
        fontFamily={"marcellus"}
        fontSize={"54px"}
        textDecorationLine={"underline"}
        textDecorationThickness={"5px"}
        textUnderlineOffset={"20px"}
      >
        WeSoilCare founders :
      </Heading>
      <Member1 marginTop={"120px"} />
      <Member2 marginTop={"250px"} />
      <Member3 marginTop={"250px"} />
    </Box>
  );
};

export default TeamPage;
