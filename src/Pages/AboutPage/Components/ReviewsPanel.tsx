import { Avatar, Box, Heading, Image, Text } from "@chakra-ui/react";
import image1 from "../../../assets/Vector 6.png";
import icon1 from "../../../assets/Farmer.svg";
import icon2 from "../../../assets/Group.svg";

const ReviewsPanel = () => {
  return (
    <Box
      bgImage={image1}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      width={"full"}
      height={innerWidth * 0.78}
      display={"flex"}
      justifyContent={"center"}
      minHeight={"100vh"}
    >
      <Box
        width={"65%"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
      >
        <Heading
          marginTop={"250px"}
          fontFamily={"inter"}
          fontSize={"90px"}
          textColor={"white"}
        >
          What our clients say
        </Heading>
        <Box bgColor={"white"} width={"full"} padding={10} marginTop={40}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box display={"flex"} alignItems={"center"}>
              <Avatar src={icon1} size={"xl"} />
              <Text fontFamily={"inter"} fontSize={"35px"} marginLeft={3}>
                boub mourad
              </Text>
            </Box>

            <Image src={icon2} boxSize={"160px"} marginRight={10} />
          </Box>
          <Text
            marginTop={"0px"}
            fontFamily={"inter"}
            fontWeight={"700"}
            fontSize={"30px"}
            textColor={"blackAlpha.600"}
            padding={6}
          >
            I wanted to express my sincere gratitude for your remarkable
            website. The insights into my soil have been a game-changer, and
            your user-friendly tools have empowered better decisions. Since
            adopting your machines and app, I've seen a significant increase in
            my earnings. Here's to a future of abundant harvests and
            environmental stewardship.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewsPanel;
