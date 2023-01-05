import {
  HStack,
  Heading,
  Box,
  Text,
  Grid,
  VStack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import BoxContainer from "../../Layout/BoxContainer";
import { CIconButton } from "../../Static/Common/Button";

const MeetChef = () => {
  return (
    <BoxContainer>
      <HStack justify="space-between">
        <Heading as="h1" fontSize={["2xl", "3xl"]} textTransform="capitalize">
          Meet our chefs
        </Heading>
        <HStack spacing={2}>
          <Box>
            <CIconButton icon={AiOutlineArrowLeft} key={6} />
          </Box>
          <Box>
            <CIconButton icon={AiOutlineArrowRight} key={7} />
          </Box>
        </HStack>
      </HStack>
      <Grid
        w="full"
        overflow="hidden"
        my={8}
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={[2, 5]}
        justifyItems="center"
      >
        <ChefItem image="/img/chef.png" name="Jisan Khan Sobuj" />
        <ChefItem image="/img/chef.png" name="Jisan Khan Sobuj" />
        <ChefItem image="/img/chef.png" name="Jisan Khan Sobuj" />
        <ChefItem image="/img/chef.png" name="Jisan Khan Sobuj" />
      </Grid>
    </BoxContainer>
  );
};

export default MeetChef;

interface IChefProps {
  name: string;
  image: string;
}

const ChefItem: React.FC<IChefProps> = ({ name, image }) => {
  return (
    <VStack
      rounded="xl"
      boxShadow="lg"
      mb={[4, 10]}
      p={[4, 8]}
      w="295px"
      bg="white"
      spacing={5}
    >
      <Image src={image} alt={name} w="full" objectFit="cover" />
      <Heading color="primary.100" fontSize="xl">
        {name}
      </Heading>
    </VStack>
  );
};
