import { Box, Heading } from '@chakra-ui/react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar/NavBar'

const ErrorPage = () => {
  return (
    <Box
      bg={"brand.600"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      minHeight={screen.height}
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
      <Heading>Error 404</Heading>
      <Footer />
    </Box>
  )
}

export default ErrorPage