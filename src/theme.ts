import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#8D7B68",
    800: "#A4907C",
    700: "#C8B6A6",
    600: "#F1DEC9",
    500: "#FFF6ED82",
  },
};

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({ config, colors });

export default theme;
