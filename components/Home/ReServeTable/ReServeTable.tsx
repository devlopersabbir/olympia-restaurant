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
      <HStack gap={10} my={20}>
        <VStack align="left" w="50%" pr={[0, 32]}>
          <Heading
            textTransform="capitalize"
            fontSize={[44, 36]}
            fontWeight="bold"
          >
            We are more then multiple survice
          </Heading>
          <Text fontSize="16px">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            architecto? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolore, dolor.
          </Text>

          <Flex>
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
        <Image src="/img/reserve.png" alt="shape" w="50%" />
      </HStack>
    </BoxContainer>
  );
};

export default ReServeTable;
