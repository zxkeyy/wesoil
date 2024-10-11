import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar/NavBar";
import ScrollToTop from "../Components/General/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Box
        bg={"brand.600"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        minHeight={screen.height}
        minWidth={"1200px"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"full"}
          bgColor={"brand.600"}
          position={"sticky"}
          top={0}
          zIndex={999}
        >
          <NavBar marginBottom={5} width={"65%"} />
        </Box>
        <Outlet />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
