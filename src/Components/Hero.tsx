import { Heading, Input, Button, Link, Text, Box, BoxProps } from "@chakra-ui/react";
import BgImage from "../assets/Rectangle1.jpeg";

interface Props extends BoxProps{
}

const Hero = (props: Props) => {
  return (
    <Box
      style={{
        backgroundImage: `linear-gradient(90deg, #f1dec9 1.47%, rgba(10, 10, 10, 0.00) 100%), url(${BgImage})`,
      }}
      bgSize="100%"
      bgPos="center"
      width={"100%"}
      aspectRatio={7.1 / 4}
      borderRadius={10}
      overflow={"auto"}
      {...props}
    >
      <Heading
        width={"40%"}
        marginTop={"5%"}
        fontFamily={"marcellus"}
        fontSize={"45"}
        lineHeight={"60px"}
      >
        Unlock the secrets of your soil with AI-powered precision!
      </Heading>
      <Text
        width={"47%"}
        marginTop={"5%"}
        fontFamily={"marcellus"}
        fontSize={"25"}
        lineHeight={"33px"}
      >
        Harness the Power of AI to Unearth the True Potential of Your Soil. Join
        Our Community and Embrace a Future of Sustainable Agriculture!
      </Text>
      <Box
        display="flex"
        width="60%"
        marginTop={"5%"}
        borderRadius={"20"}
        padding={2}
        style={{ background: "rgba(164, 144, 124, 0.26)" }}
      >
        <Input
          colorScheme="pink"
          variant="outline"
          bgColor={"white"}
          fontFamily={"inter"}
          fontSize={"25"}
          borderRadius={"14"}
          paddingY={6}
          placeholder="Enter your email"
        ></Input>
        <Button
          bgColor={"brand.900"}
          textColor={"white"}
          _hover={{}}
          _active={{
            bg: "brand.800",
            transform: "scale(0.98)",
          }}
          paddingY={6}
          paddingX={10}
          fontSize={"25"}
          marginLeft={"5"}
        >
          Get Started
        </Button>
      </Box>
      <Box
        display="flex"
        width={"47%"}
        alignItems={"center"}
        paddingY={1}
        paddingX={3}
      >
        <Text
          color={"rgba(0, 0, 0, 0.70)"}
          fontFamily={"inter"}
          fontSize={"18"}
        >
          already have an account?
        </Text>
        <Link marginLeft={"2%"}>
          <Text fontFamily={"inter"} fontSize={"21"}>
            Log In
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default Hero;
