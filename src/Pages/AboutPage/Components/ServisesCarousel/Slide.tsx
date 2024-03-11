import { Box, Heading, Image } from "@chakra-ui/react";

interface Props {
  image: string;
  title: string;
}

const Slide = ({ image, title }: Props) => {
  return (
    <Box padding={10}>
      <Box
        // width={"full"}
        height={"350px"}
        bgColor={"white"}
        padding={5}
        boxShadow={"-20px 20px 18px 0px rgba(0, 0, 0, 0.25);"}
      >
        <Image src={image} />
        <Heading
          textAlign={"center"}
          fontSize={"31px"}
          fontFamily={"inter"}
          paddingY={10}
        >
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export default Slide;
