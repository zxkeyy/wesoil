import { Box, BoxProps, Heading, Image, Text } from "@chakra-ui/react";
import image1 from "../../../assets/Rectangle 75.png";
import image2 from "../../../assets/Rectangle 77.png";
import image3 from "../../../assets/Rectangle 76.png";

interface Props extends BoxProps {}
const Panel3 = (props: Props) => {
  return (
    <Box {...props}>
      <Heading fontFamily={"marcellus"} fontSize={"44px"}>
        <Box
          boxSize={5}
          borderRadius={"full"}
          bgColor={"black"}
          display={"inline-block"}
          verticalAlign={"middle"}
        ></Box>
        Our Agriculture System :
      </Heading>
      <Box width={"100%"} marginTop={5}>
        <Text fontFamily={"marcellus"} fontSize={"27px"} padding={2}>
          Our system is a combination betwen Ai and iot. all of this we have
          imployed in agriculture. and this how that fonction :
          <br />
          After you've acquired our humble service and activated the system, the
          first step is to partition your agricultural land into various
          sections according to your preferences. Once the land is divided, you
          specify the type of plant you wish to cultivate in each section, along
          with the planting date. This is aimed at providing accurate
          information and ensuring the optimal application of our service. Once
          you've completed these steps, the dedicated robot embarks on its
          initial patrol. It roams around the cultivated areas, collecting data
          for each section individually. This information is then transmitted to
          the system for assessment, distinguishing between healthy and affected
          portions. In the event of any damage, the system identifies the cause
          and presents it to the user, along with proposed solutions.
          <br /> Upon approval, the system addresses the issue according to its
          nature. For instance, if it detects elevated toxin levels hindering
          plant growth, it suggests the necessary pesticide. Once confirmed, the
          user loads the drone with the prescribed pesticide, and the robot, as
          mentioned earlier, takes care of applying it to the designated area.
        </Text>
      </Box>
      <Box width={"100%"} marginTop={5}>
        <Image
          src={image1}
          height={"40%"}
          boxShadow={"-32px 43px 28px 0px rgba(0, 0, 0, 0.25)"}
        />
      </Box>
      <ol>
        <Box display={"flex"} justifyContent={"space-between"} marginTop={6}>
          <Box width={"47%"}>
            <Text fontFamily={"marcellus"} fontSize={"27px"} padding={2}>
              In the case of land integrity, we proceed to the next stage. The
              sensor supplies our system with the necessary climatic information
              required to validate weather forecasts. This enables the system to
              generate accurate calculations essential for safeguarding
              agricultural soil and achieving successful growth without causing
              any harm. <br />
              Let's consider two scenarios as examples:
              <li style={{ marginLeft: "40px" }}>
                High Temperature Condition:
                <br /> Elevated temperatures can lead to soil dryness and rapid
                water evaporation during irrigation. In response, the system
                determines the need for dual daily watering sessions—dawn and
                dusk—to saturate the soil and prevent water loss through
                evaporation.
              </li>
            </Text>
          </Box>
          <Box
            width={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"end"}
          >
            <Image
              marginBottom={20}
              src={image2}
              height={"70%"}
              borderRadius={"38"}
              boxShadow={"-32px 43px 28px 0px rgba(0, 0, 0, 0.25)"}
            />
          </Box>
        </Box>
        <Text fontFamily={"marcellus"} fontSize={"27px"} padding={2}>
          <li style={{ marginLeft: "40px" }}>
            Low Temperature Condition: This climate tends to be somewhat humid
            or might bring occasional rain. In such cases, the system performs
            calculations and decides that a single watering session is
            sufficient, without specifying a particular time.
          </li>
          It's important to note that plant type is also a factor in these
          calculations, as not all plants have the same water consumption rates.
        </Text>
      </ol>
      <Text
        fontFamily={"marcellus"}
        fontSize={"27px"}
        padding={2}
        marginTop={20}
      >
        On the other hand, when it comes to irrigation, as mentioned earlier,
        not all plant types require the same amount of water. Recognizing this,
        our system takes into account the user-designated land divisions and the
        chosen vegetable types for cultivation. It then strategically directs
        water as needed through an advanced directional control mechanism, which
        you can find detailed on the machinery page. After one area has been
        watered and another needs attention, the system automatically and
        intelligently rotates the device. This ensures the efficient management
        of irrigation without the farmer needing to manually adjust the water
        flow direction. This way, when the irrigation schedule for one section
        is complete, the system seamlessly transitions to the next, optimizing
        water distribution and reducing the need for manual intervention.
      </Text>

      <Box width={"100%"} marginTop={5}>
        <Image
          src={image3}
          height={"40%"}
          boxShadow={"-32px 43px 28px 0px rgba(0, 0, 0, 0.25)"}
        />
      </Box>
    </Box>
  );
};

export default Panel3;
