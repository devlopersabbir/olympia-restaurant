import { IconButton, Icon, Button } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface ICIconButtonProps {
  icon: IconType;
}
export const CIconButton: React.FC<ICIconButtonProps> = ({ icon }) => {
  return (
    <IconButton
      aria-label="basket"
      icon={<Icon as={icon} color="primary.100" />}
      fontSize="xl"
      variant="ghost"
      border="2px"
      rounded="full"
      borderColor="background.100"
      _hover={{ bg: "background.100", transition: "ease 0.3 all" }}
      shadow="lg"
    />
  );
};

interface ICButton {
  rightOrleftIcon?: IconType;
  text: string;
}

export const CButton: React.FC<ICButton> = ({ text, rightOrleftIcon }) => {
  return (
    <Button
      leftIcon={rightOrleftIcon && <Icon as={rightOrleftIcon} fontSize="lg" />}
      _hover={{
        bg: "background.100",
        color: "primary.100",
        transition: "ease 0.3s all",
        borderColor: "white",
        shadow: "lg",
      }}
      border="2px"
      borderColor="background.100"
      size="md"
      rounded="full"
      variant="ghost"
    >
      {text}
    </Button>
  );
};
