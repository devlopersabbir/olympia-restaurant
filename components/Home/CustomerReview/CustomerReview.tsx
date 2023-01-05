import {
  HStack,
  Heading,
  Box,
  Text,
  Grid,
  VStack,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import BoxContainer from "../../Layout/BoxContainer";
import { CIconButton } from "../../Static/Common/Button";

const CustomerReview: React.FC = () => {
  return (
    <BoxContainer>
      <HStack justify="space-between">
        <Heading as="h1" fontSize={["2xl", "3xl"]} textTransform="capitalize">
          what our customer says?
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
        my={8}
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={[3, 7]}
      >
        <ClientReview
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti velit
        nisi, aliquam officia praesentium possimus. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Quo, incidunt."
          image="/img/avater.png"
          name="Jisan Khan Sobuj"
        />
        <ClientReview
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti velit
      nisi, aliquam officia praesentium possimus. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Quo, incidunt."
          image="/img/avater.png"
          name="Jisan Khan Sobuj"
        />
        <ClientReview
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti velit
    nisi, aliquam officia praesentium possimus. Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Quo, incidunt."
          image="/img/avater.png"
          name="Jisan Khan Sobuj"
        />
      </Grid>
    </BoxContainer>
  );
};

export default CustomerReview;

interface IClientProps {
  message: string;
  image: string;
  name: string;
}

const ClientReview: React.FC<IClientProps> = ({ message, image, name }) => {
  return (
    <VStack align="left" bg="#fef7eb" p={[3, 6]} rounded="lg">
      <Text as="p" fontSize="16px" pb={3}>
        {message}
      </Text>
      <Avatar src={image} name={name} />
      <Heading color="primary.100" fontSize="xl">
        {name}
      </Heading>
    </VStack>
  );
};
