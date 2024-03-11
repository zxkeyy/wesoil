import { Box, Heading } from "@chakra-ui/react";
import Panel1 from "./Components/Panel1";
import Panel2 from "./Components/Panel2";
import Panel3 from "./Components/Panel3";

const TechnologyPAge = () => {
  return (
    <Box bg={"brand.600"} width={"65%"}>
      <Heading
        fontFamily={"marcellus"}
        fontSize={"54px"}
        textDecorationLine={"underline"}
        textDecorationThickness={"5px"}
        textUnderlineOffset={"20px"}
      >
        WeSoilCare Technologie :
      </Heading>
      <Panel1 marginTop={"3%"}/>
      <Panel2 marginTop={"3%"}/>
      <Panel3 marginTop={"3%"}/>
    </Box>
  );
};

export default TechnologyPAge;
