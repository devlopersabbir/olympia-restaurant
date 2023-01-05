import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Icon,
  IconButton,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { BiMobile } from "react-icons/bi";
import { GrRevert } from "react-icons/gr";
import BoxContainer from "../../Layout/BoxContainer";

const WeAreMultipleService = () => {
  return (
    <BoxContainer>
      <HStack
        gap={[3, 3, 10]}
        my={[3, 3, 20]}
        flexDir={["column", "column", "row"]}
        w="full"
        align={["center", "center", "unset"]}
      >
        <Image src="/img/shape.png" alt="shape" w={["100%", "100%", "50%"]} />
        <VStack align="left" w={["100%", "100%", "50%"]} pr={[0, 0, 32]}>
          <Heading
            textTransform="capitalize"
            fontSize={[30, 36, 44]}
            fontWeight="bold"
          >
            We are more then multiple survice
          </Heading>
          <Text fontSize="16px">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            architecto? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolore, dolor.
          </Text>
          <VStack py={[4, 7]} align="left" flexDir={["column", "column"]}>
            <MultipleService
              licon={BiMobile}
              ltext="Online Order"
              ricon={GrRevert}
              rtext="Pre-revervation"
            />
            <MultipleService
              licon={BiMobile}
              ltext="Online Order"
              ricon={GrRevert}
              rtext="Pre-revervation"
            />
            <MultipleService
              licon={BiMobile}
              ltext="Online Order"
              ricon={GrRevert}
              rtext="Pre-revervation"
            />
          </VStack>
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
              About us
            </Button>
          </Flex>
        </VStack>
      </HStack>
    </BoxContainer>
  );
};

export default WeAreMultipleService;

interface IMultipleService {
  ltext: string;
  licon: IconType;
  rtext: string;
  ricon: IconType;
}
const MultipleService: React.FC<IMultipleService> = ({
  licon,
  ltext,
  ricon,
  rtext,
}) => {
  return (
    <HStack
      justify="space-between"
      flexDir={["column", "row"]}
      align="left"
      gap={[2, 3]}
    >
      <HStack spacing={4}>
        <IconButton
          variant="outline"
          rounded="full"
          p={1}
          aria-label="phone"
          icon={<Icon as={licon} fontSize="3xl" color="primary.100" />}
        />

        <Text fontSize="16px" fontWeight="bold" color="primary.100">
          {ltext}
        </Text>
      </HStack>
      <HStack spacing={4}>
        <IconButton
          variant="outline"
          rounded="full"
          p={1}
          aria-label="phone"
          icon={<Icon as={ricon} fontSize="3xl" color="primary.100" />}
        />

        <Text fontSize="16px" fontWeight="bold" color="primary.100">
          {rtext}
        </Text>
      </HStack>
    </HStack>
  );
};
