import { Box, Heading } from "@chakra-ui/react";
import Panel1 from "./Components/Panel1";
import Panel2 from "./Components/Panel2";
import Panel3 from "./Components/Panel3";
import Panel4 from "./Components/Panel4";

const DevicesPage = () => {
  return (
    <Box bg={"brand.600"} width={"65%"}>
      <Heading
        fontFamily={"marcellus"}
        fontSize={"54px"}
        textDecorationLine={"underline"}
        textDecorationThickness={"5px"}
        textUnderlineOffset={"20px"}
      >
        WeSoilCare Machines :
      </Heading>
      <Panel1 />
      <Panel2 />
      <Panel3 />
      <Panel4 />
    </Box>
  );
};

export default DevicesPage;
