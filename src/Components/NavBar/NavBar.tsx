import { Box, BoxProps, Button, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import NavButton from "./NavButton";
import { BsPerson } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

interface Props extends BoxProps {}

const NavBar = ({ ...props }: Props) => {
  const location = useLocation();

  return (
    <Box
      display="flex"
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={0}
      paddingTop={3}
      {...props}
    >
      <Link to={import.meta.env.BASE_URL + ""}>
        <Image src={logo} cursor={"pointer"} />
      </Link>
      <Box
        display="flex"
        justifyContent={"space-between"}
        alignItems={"center"}
        height="fit-content"
        width="60%"
      >
        <Link to={import.meta.env.BASE_URL + ""}>
          <NavButton
            aria-selected={location.pathname === import.meta.env.BASE_URL + ""}
          >
            About
          </NavButton>
        </Link>
        <Link to={import.meta.env.BASE_URL + "devices"}>
          <NavButton
            aria-selected={
              location.pathname === import.meta.env.BASE_URL + "devices"
            }
          >
            Devices
          </NavButton>
        </Link>
        <Link to={import.meta.env.BASE_URL + "technology"}>
          <NavButton
            aria-selected={
              location.pathname === import.meta.env.BASE_URL + "technology"
            }
          >
            Technology
          </NavButton>
        </Link>
        <Link to={import.meta.env.BASE_URL + "team"}>
          <NavButton
            aria-selected={
              location.pathname === import.meta.env.BASE_URL + "team"
            }
          >
            Team
          </NavButton>
        </Link>
      </Box>
      <Button
        leftIcon={<BsPerson />}
        bgColor={"brand.900"}
        textColor={"white"}
        _hover={{}}
        _active={{
          bg: "brand.800",
          transform: "scale(0.98)",
        }}
      >
        Log In
      </Button>
    </Box>
  );
};

export default NavBar;
