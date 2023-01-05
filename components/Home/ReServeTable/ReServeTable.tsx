import {
  HStack,
  VStack,
  Heading,
  Flex,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import BoxContainer from "../../Layout/BoxContainer";

const ReServeTable = () => {
  return (
    <BoxContainer>
      <HStack gap={[3, 10]} my={[10, 20]} flexDir={["column", "column", "row"]}>
        <VStack
          align="left"
          w={["100%", "100%", "50%"]}
          pr={[0, 32]}
          spacing={[3, 7]}
        >
          <Heading
            textTransform="capitalize"
            fontSize={[30, 36, 44]}
            fontWeight="bold"
          >
            do you have any dinner plan today? reserve your table
          </Heading>
          <Text fontSize="16px">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            architecto? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolore, dolor.
          </Text>

          <Flex w="full" justify={["center", "left"]}>
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
              Make Reservation
            </Button>
          </Flex>
        </VStack>
        <Image src="/img/reserve.png" alt="shape" w={["100%", "100%", "50%"]} />
      </HStack>
    </BoxContainer>
  );
};

export default ReServeTable;
