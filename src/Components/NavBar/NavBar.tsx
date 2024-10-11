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
      <Image
        src={logo}
        onClick={() => {
          window.location.href = "/";
        }}
        cursor={"pointer"}
      />
      <Box
        display="flex"
        justifyContent={"space-between"}
        alignItems={"center"}
        height="fit-content"
        width="60%"
      >
        <Link to={"/"}>
          <NavButton aria-selected={location.pathname === "/"}>About</NavButton>
        </Link>
        <Link to={"/devices"}>
          <NavButton aria-selected={location.pathname === "/devices"}>
            Devices
          </NavButton>
        </Link>
        <Link to={"/technology"}>
          <NavButton aria-selected={location.pathname === "/technology"}>
            Technology
          </NavButton>
        </Link>
        <Link to={"/team"}>
          <NavButton aria-selected={location.pathname === "/team"}>
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
