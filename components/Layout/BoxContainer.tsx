import { Container } from "@chakra-ui/react";
import React from "react";

interface IBoxContainerChildren {
  children: React.ReactNode;
}

const BoxContainer: React.FC<IBoxContainerChildren> = ({ children }) => {
  return (
    <Container maxW="1280px" h="auto" mx="auto" my={[10, 20]} px={[2, 5]}>
      {children}
    </Container>
  );
};

export default BoxContainer;
