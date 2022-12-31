import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#1E284B",
    },
    primary: {
      100: "#593620",
      200: "#FF9A33",
    },
    secondary: {
      100: "#1E284B",
    },
    background: {
      main: "#fdfcf7",
      100: "#f2bd57",
    },
    text: {
      title: "#151C35",
      dark1: "#353535",
      dark2: "#4C4C4C",
      dark3: "#626262",
      dark4: "#797979",
    },
    error: {
      100: "#E53535",
      200: "#FF5C5C",
      300: "#FF8080",
      400: "#FF6262",
      main: "#FF6262",
    },
    warning: {
      100: "#E5B800",
      200: "#FDDD48",
      300: "#FDED72",
      w: "#FFCC00",
    },
    info: {
      100: "#004FC4",
      200: "#5B8DEF",
      300: "#9DBFF9",
      main: "#0063F7",
    },
    success: {
      main: "#06C270",
      100: "#05A660",
      200: "#39D98A",
      300: "#57EBA1",
    },
    boxShadow: {
      main: "0px 4px 6px rgba(0, 6, 150, 0.05), 0px 10px 15px rgba(0, 6, 150, 0.1)",
    },
    borderRadius: {
      box: "15px",
    },
  },
  sizes: {
    container: {
      sm: "640px",
      md: "768px",
      lg: "1170px",
      xl: "1280px",
    },
  },
});

export default theme;
