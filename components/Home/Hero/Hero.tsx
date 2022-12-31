import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  IconButton,
  Image,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { hero } from "./Data";

const Hero = () => {
  return (
    <>
      {hero.map((data: any, i: number) => (
        <Box
          w="100%"
          mt={1}
          zIndex={99}
          sx={{
            backgroundImage: `url(${data?.backgroundImage})`,
            width: "100%",
            height: "80vh",
            backgroundRepeat: "no-repeat",
            bgPos: "center",
          }}
        >
          <Container
            maxW="container.lg"
            height="100%"
            bgPos={["unset", "center"]}
          >
            <Flex height="600px" align="center" gap={4}>
              <VStack align="flex-start" spacing={5} flex={1} pr={[0, 14]}>
                <Heading
                  textTransform="capitalize"
                  color="text.title"
                  fontWeight={500}
                  fontSize={["40px", "54px"]}
                >
                  {data?.title}
                </Heading>
                <Text as="p" py={4}>
                  {data?.sortDescription}
                </Text>
                <HStack align="center" spacing={[2, 4]}>
                  <Button
                    type="button"
                    color="primary.100"
                    bg="background.100"
                    size="md"
                    rounded="full"
                    shadow="lg"
                    border="2px"
                    borderColor="white"
                  >
                    Explore Food
                  </Button>
                  <Button
                    leftIcon={<Icon as={BiSearch} fontSize="lg" />}
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
                    Search
                  </Button>
                </HStack>
              </VStack>
              <Flex flex={1} display={{ base: "none", md: "flex" }}></Flex>
            </Flex>
          </Container>
        </Box>
      ))}
    </>
  );
};

export default Hero;
