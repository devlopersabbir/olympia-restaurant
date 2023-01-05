import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Text,
  Icon,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { GrBasket } from "react-icons/gr";

interface IMobileMenuProps {
  isOpen: any;
  onClose: any;
  btnRef: any;
  navLinks: any;
}
const MobileMenu: React.FC<IMobileMenuProps> = ({
  isOpen,
  onClose,
  btnRef,
  navLinks,
}) => {
  const router = useRouter();
  return (
    <Drawer
      isOpen={isOpen}
      placement="top"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent bg="background.100">
        <DrawerCloseButton />

        <DrawerBody p={5}>
          <VStack spacing={4}>
            {navLinks.map((item: any, i: number) => (
              <Item
                key={i}
                active={router.asPath === item.link}
                text={item.text}
                onClose={onClose}
                link={item.link}
              />
            ))}
            <IconButton
              aria-label="basket"
              icon={<Icon as={GrBasket} color="primary.100" />}
              fontSize="xl"
              variant="ghost"
              border="2px"
              rounded="full"
              borderColor="background.100"
              shadow="lg"
            />
            <Button
              color="primary.100"
              bg="background.100"
              size="md"
              rounded="full"
              shadow="lg"
            >
              Reserve Table
            </Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

interface IItem {
  link: string;
  onClose: any;
  active: boolean;
  text: string;
}
const Item: React.FC<IItem> = ({ link, onClose, active, text }) => {
  return (
    <Link onClick={onClose} href={link}>
      <Text
        fontSize="16px"
        _hover={{ color: "primary.100", transition: "ease all 0.3s" }}
        fontWeight={500}
        color={active ? "primary.100" : "text.title"}
      >
        {text}
      </Text>
    </Link>
  );
};

export default MobileMenu;
