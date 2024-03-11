import {
  Box,
  BoxProps,
  Grid,
  GridItem,
  Heading,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";

interface Props extends BoxProps {}

const Footer = (props:Props) => {
  return (
    <Box
      width={"full"}
      marginTop={40}
      bgColor={"brand.900"}
      display={"flex"}
      justifyContent={"center"}
      {...props}
    >
      <Grid
        templateAreas={`"wesoil explore solution contact"`}
        gridTemplateColumns={"40% 20% 20% 20%"}
        width={"65%"}
      >
        <GridItem area={"wesoil"}>
          <Box paddingRight={"100px"} paddingY={20}>
            <Heading textColor={"white"} fontFamily={"inter"} fontSize={"40px"}>
              WeSoilCare Farm
            </Heading>
            <Text
              textColor={"whiteAlpha.700"}
              fontFamily={"inter"}
              fontSize={"20px"}
              marginTop={"40px"}
            >
              Wesoilcare: Pioneering sustainable agriculture through technology.
              Unleashing soil insights for higher yields. Empowering farmers for
              a greener future.
            </Text>
          </Box>
        </GridItem>
        <GridItem area={"explore"}>
          <Box paddingX={"0px"} paddingY={20}>
            <Heading textColor={"white"} fontFamily={"inter"} fontSize={"40px"}>
              Explore
            </Heading>
            <Box marginTop={"40px"}>
              <Link
                fontFamily={"inter"}
                fontSize={"20px"}
                textColor={"whiteAlpha.700"}
              >
                How we help
              </Link>
            </Box>
            <Box>
              <Link
                fontFamily={"inter"}
                fontSize={"20px"}
                textColor={"whiteAlpha.700"}
              >
                Required Equipment
              </Link>
            </Box>
            <Box>
              <Link
                fontFamily={"inter"}
                fontSize={"20px"}
                textColor={"whiteAlpha.700"}
              >
                Usage costs
              </Link>
            </Box>
            <Box>
              <Link
                fontFamily={"inter"}
                fontSize={"20px"}
                textColor={"whiteAlpha.700"}
              >
                Community
              </Link>
            </Box>
          </Box>
        </GridItem>
        <GridItem area={"solution"}>
          <Box paddingX={"00px"} paddingY={20}>
            <Heading textColor={"white"} fontFamily={"inter"} fontSize={"40px"}>
              Solutions
            </Heading>
            <Box marginTop={"40px"}>
              <Link
                fontFamily={"inter"}
                fontSize={"20px"}
                textColor={"whiteAlpha.700"}
              >
                Features
              </Link>
            </Box>
            <Box>
              <Link
                fontFamily={"inter"}
                fontSize={"20px"}
                textColor={"whiteAlpha.700"}
              >
                Support
              </Link>
            </Box>
            <Box>
              <Link
                fontFamily={"inter"}
                fontSize={"20px"}
                textColor={"whiteAlpha.700"}
              >
                Advantages
              </Link>
            </Box>
            <Box>
              <Link
                fontFamily={"inter"}
                fontSize={"20px"}
                textColor={"whiteAlpha.700"}
              >
                Additions
              </Link>
            </Box>
          </Box>
        </GridItem>
        <GridItem area={"contact"}>
          <Box paddingX={"0px"} paddingY={20} paddingBottom={0}>
            <Heading textColor={"white"} fontFamily={"inter"} fontSize={"40px"}>
              Contact Us
            </Heading>
            <Box marginTop={"40px"}>
              <Link
                fontFamily={"inter"}
                fontSize={"20px"}
                textColor={"whiteAlpha.700"}
              >
                <Icon>
                  <BsFillTelephoneFill />
                </Icon>
                +033340856
              </Link>
            </Box>
            <Box>
              <Link
                fontFamily={"inter"}
                fontSize={"20px"}
                textColor={"whiteAlpha.700"}
              >
                <Icon>
                  <MdMail />
                </Icon>
                wesoilcare@gmail.com
              </Link>
            </Box>
            <Box marginTop={5}>
              <Link textColor={"whiteAlpha.700"}>
                <Icon boxSize={"20%"}>
                  <FaFacebookSquare />
                </Icon>
              </Link>
              <Link textColor={"whiteAlpha.700"}>
                <Icon boxSize={"20%"}>
                  <AiFillInstagram />
                </Icon>
              </Link>
              <Link textColor={"whiteAlpha.700"}>
                <Icon boxSize={"20%"}>
                  <FaTwitter />
                </Icon>
              </Link>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
