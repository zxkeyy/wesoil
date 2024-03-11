import { Box, Heading, Image, Text } from "@chakra-ui/react";
import image1 from "../../../assets/Rectangle 64.png";

const Panel1 = () => {
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
          WeSoil drone
        </Heading>
        <Box width={"full"} marginTop={10}>
          <Text fontFamily={"marcellus"} fontSize={"28px"}>
            <b>task :</b> Eliminate toxins & acidity adjustment
          </Text>
          <Text fontFamily={"marcellus"} fontSize={"28px"}>
            <b>energy used :</b> Solar and electric energy
          </Text>
          <Text fontFamily={"marcellus"} fontSize={"28px"}>
            <b>method :</b>
          </Text>
          <Text fontFamily={"marcellus"} fontSize={"22px"}>
            After the specialized robot detects toxins in the soil and pests, it
            identifies their locations and sends this data to our dedicated
            system, known as Wesoilcare. The system initially verifies the
            robot's integrity to prevent the transmission of inaccurate
            information. Once confirmed, the system forwards these locations and
            the required pesticide type for each area to the drone.
            Subsequently, the drone carries out pesticide application while
            meticulously adhering to the designated specifications, ensuring
            both the correct pesticide and precise location are maintained.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Panel1;
