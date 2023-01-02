import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Item from "./Home/PopularDishes/Items/Item";
interface Category {
  id: number;
  name: string;
  dishes?: Dishe[];
}
interface Dishe {
  id: number;
  categoryId: number;
  name: string;
  shortDesc: string;
  description: string;
  image: string;
  price: number;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Special Food",
  },
  {
    id: 2,
    name: "Maxican",
  },
  {
    id: 3,
    name: "Itialian",
  },
  {
    id: 4,
    name: "Japanese",
  },
  {
    id: 5,
    name: "Chinese",
  },
];

const dishes: Dishe[] = [
  {
    id: 1,
    categoryId: 1,
    name: "Pasta",
    shortDesc: "Pasta is type of food typically made from an unleavened dough",
    description: "lorem if sum",
    image: "/img/pasta.png",
    price: 35,
  },
  {
    id: 2,
    categoryId: 1,
    name: "French Fires",
    shortDesc: "Pasta is type of food typically made from an unleavened dough",
    description: "",
    image: "/img/franch.png",
    price: 55,
  },
  {
    id: 3,
    categoryId: 2,
    name: "French Fires",
    shortDesc: "Pasta is type of food typically made from an unleavened dough",
    description: "",
    image: "/img/franch.png",
    price: 55,
  },
];

const Demo = () => {
  const [selectedId, setSelectedId] = useState(categories[0].id);
  return (
    <Tabs>
      <TabList>
        {categories.map((category) => (
          <Tab onClick={() => setSelectedId(category.id)} key={category.id}>
            {category.name}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {categories.map((cat) => (
          <TabPanel>
            {dishes
              .filter((dish) => dish.categoryId === selectedId)
              .map((item) => (
                <Text>{item.name}</Text>
              ))}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default Demo;
