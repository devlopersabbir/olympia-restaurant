import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../Static/Footer/Footer";
import Header from "../Static/Header/Header";

interface IChildrenProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<IChildrenProps> = ({ children }) => {
  return (
    <Box w="full" bg="background.main">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default MainLayout;
