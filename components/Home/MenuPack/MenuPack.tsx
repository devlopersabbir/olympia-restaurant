import {
  HStack,
  VStack,
  Heading,
  Flex,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiMobile } from "react-icons/bi";
import { GrRevert } from "react-icons/gr";
import BoxContainer from "../../Layout/BoxContainer";
import Item from "../PopularDishes/Items/Item";
import { categories, dishes } from "./Data";

const MenuPack = () => {
  const [selectedId, setSelectedId] = useState(categories[0].id);
  return (
    <BoxContainer>
      <Heading
        textTransform="capitalize"
        fontSize={[36, 44, 36]}
        fontWeight="bold"
        textAlign="center"
      >
        We are more then multiple survice
      </Heading>
      <Tabs py={[5, 10]} variant="unstyled">
        <TabList
          border="none"
          p="0"
          flexDir={["column-reverse", "column-reverse", "row"]}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {categories.map((cat) => (
            <Tab onClick={() => setSelectedId(cat.id)} key={cat.id}>
              <AllTabs text={cat.name} key={cat.id} />
            </Tab>
          ))}
        </TabList>
        <TabPanels w="full">
          {categories.map((cat) => (
            <TabPanel key={cat.id} transition="ease all 0.5s">
              <Grid
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(4, 1fr)",
                ]}
                gap={[3, 6]}
                alignItems="center"
                mt={8}
              >
                {dishes
                  .filter((dish) => dish.categoryId === selectedId)
                  .map((item) => (
                    <Item dish={item} key={item.id} />
                  ))}
              </Grid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </BoxContainer>
  );
};

export default MenuPack;

interface IAllTabsProps {
  text: string;
}
const AllTabs: React.FC<IAllTabsProps> = ({ text }) => {
  return (
    <Button
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
      {text}
    </Button>
  );
};
