import {
  Container,
  Flex,
  Button,
  IconButton,
  Icon,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { navLinks } from "./data";
import { GrBasket } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const btnRef = useRef(null);
  const router = useRouter();
  return (
    <>
      <Container maxW="container.lg">
        <Flex py={3} align="center" justify="space-between">
          <Link href="/">
            <Heading as="h1">LOGO</Heading>
          </Link>
          <Flex align="center" gap={5} display={{ base: "none", md: "flex" }}>
            {navLinks.map((item, index) => (
              <NavLink
                key={index}
                text={item.text}
                active={router.asPath === item.link}
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
          </Flex>
          <IconButton
            onClick={() => setIsOpen(true)}
            display={["block", "block", "none"]}
            size="lg"
            aria-label="menu-toggle"
            colorScheme="yellow"
            variant="ghost"
            ref={btnRef}
            icon={<Icon as={AiOutlineMenu} fontSize="3xl" />}
          />
        </Flex>
      </Container>
      <MobileMenu
        isOpen={isOpen}
        navLinks={navLinks}
        onClose={onClose}
        btnRef={btnRef}
      />
    </>
  );
};

export default Header;

interface INavLinkProps {
  active: boolean;
  text: string;
  link: string;
}
const NavLink: React.FC<INavLinkProps> = ({ active, text, link }) => {
  return (
    <Link href={link}>
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
