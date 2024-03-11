import { Button, ButtonProps } from "@chakra-ui/react";
interface Props extends ButtonProps {}

const NavButton = (props: Props) => {
  return (
    <Button
      _hover={{ color: "brand.900", cursor: "pointer" }}
      _selected={{ color: "brand.900", borderBottom: "2px" }}
      bg=""
      borderRadius="0"
      cursor="default"
      height="30px"
      width="60%"
      textAlign="center"
      fontWeight={"400"}
      {...props}
    ></Button>
  );
};

export default NavButton;
