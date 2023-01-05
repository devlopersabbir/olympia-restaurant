import { Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import BoxContainer from "../../Layout/BoxContainer";

const Promotions = () => {
  return (
    <BoxContainer>
      <Flex
        p={[3, 12]}
        flexDir={["column", "row"]}
        bg="#fef7eb"
        rounded="3xl"
        overflow="hidden"
        align="center"
        justify="center"
        gap={[3, 7]}
      >
        <VStack
          w={["100%", "100%", "50%"]}
          spacing={[3, 8]}
          align={["center", "center", "left"]}
        >
          <Heading
            textTransform="capitalize"
            fontSize={[30, 36, 44]}
            fontWeight="bold"
            textAlign={["center", "center", "left"]}
          >
            Never feel hungry!<br></br> download our mobile app<br></br> Enjoy
            delicious foods
          </Heading>
          <Text textAlign={["center", "center", "left"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            veniam, molestiae repellat suscipit eveniet exercitationem.
          </Text>
          <HStack spacing={4} align={["center", "center", "left"]} w="full">
            <Image w="150px" src="/img/playstore.png" alt="play store" />
            <Image w="150px" src="/img/applestore.png" alt="apple store" />
          </HStack>
        </VStack>
        <Image
          w={["100%", "100%", "50%"]}
          src="/img/promotion.png"
          alt="image"
        />
      </Flex>
    </BoxContainer>
  );
};

export default Promotions;
