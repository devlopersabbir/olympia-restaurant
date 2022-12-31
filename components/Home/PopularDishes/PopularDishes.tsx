import { Heading, HStack, IconButton, Icon, Grid, Box } from "@chakra-ui/react";
import React from "react";
import BoxContainer from "../../Layout/BoxContainer";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Item from "./Items/Item";
import { CIconButton } from "../../Static/Common/Button";
import { dishe } from "./Data";

const PopularDishes = () => {
  return (
    <BoxContainer>
      <HStack justify="space-between">
        <Heading as="h1" fontSize="3xl">
          Popular Dishes
        </Heading>
        <HStack spacing={2}>
          <Box>
            <CIconButton icon={AiOutlineArrowLeft} key={0} />
          </Box>
          <Box>
            <CIconButton icon={AiOutlineArrowRight} key={1} />
          </Box>
        </HStack>
      </HStack>

      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={[2, 6]}
        alignItems="center"
        mt={8}
      >
        {dishe.map((item, index) => (
          <Item
            key={index}
            image={item.image}
            name={item.name}
            price={item.price}
            shortDescription={item.shortDescription}
            logDescription={item.logDescription}
          />
        ))}
      </Grid>
    </BoxContainer>
  );
};

export default PopularDishes;
{
  /* <>
  {dishe.map((item: any, index: number) => {
    <Item
      image={item?.image}
      name={item?.name}
      shortDescription={item?.shortDescription}
      logDescription={item?.logDescription}
      price={item?.price}
      key={index}
    />;
  })}
</>; */
}
