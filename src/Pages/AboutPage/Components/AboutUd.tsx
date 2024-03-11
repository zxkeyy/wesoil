import { Box, BoxProps, Heading, Text } from '@chakra-ui/react'

interface Props extends BoxProps {}

const AboutUd = (props:Props) => {
  return (
    <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          {...props}
        >
          <Heading fontFamily={"inter"} fontSize={"60px"}>
            About Us
          </Heading>
          <Text
            fontFamily={"marcellus"}
            fontSize={"30px"}
            textAlign={"center"}
            lineHeight={"34px"}
            marginTop={"3%"}
            width={"85%"}
          >
            we're your partners in understanding your soil's story. Our platform
            empowers farmers by offering valuable insights into soil
            characteristics and changes. Join us to revolutionize your farming
            decisions and uncover the true potential of your land.
          </Text>
        </Box>
  )
}

export default AboutUd