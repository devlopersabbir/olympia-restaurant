import { Heading, HStack, Image, Stack, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { CButton } from "../../../Static/Common/Button";
import { AiFillStar } from "react-icons/ai";

interface IDishesItemProps {
  name: string;
  shortDescription: string;
  logDescription?: string;
  image: string;
  price: number;
}

const Item: React.FC<IDishesItemProps> = ({
  name,
  shortDescription,
  logDescription,
  image,
  price,
}) => {
  return (
    <Stack
      bg="white"
      border="2px"
      rounded="lg"
      p={[2, 5]}
      borderColor="gray.50"
      shadow="md"
      align="center"
      spacing={0}
    >
      <Image src={image} alt={name} w="full" h="full" objectFit="cover" />
      <Heading as="h2" color="primary.100" fontSize="3xl" fontWeight="bold">
        {name}
      </Heading>
      <HStack spacing={0} color="yellow.400" py={2}>
        <Icon as={AiFillStar} fontSize="xl" />
        <Icon as={AiFillStar} fontSize="xl" />
        <Icon as={AiFillStar} fontSize="xl" />
        <Icon as={AiFillStar} fontSize="xl" />
        <Icon as={AiFillStar} fontSize="xl" />
      </HStack>
      <Text
        as="p"
        color="blackAlpha.900"
        fontSize="16px"
        fontWeight="400"
        textAlign="center"
      >
        {shortDescription}
      </Text>
      <HStack
        py={2}
        pt={5}
        align="center"
        justify="space-between"
        spacing={0}
        w="full"
      >
        <Heading as="h3" fontSize="2xl" color="primary.100">
          ${price}
        </Heading>
        <CButton text="Add To Cart" key={5} />
      </HStack>
    </Stack>
  );
};

export default Item;
