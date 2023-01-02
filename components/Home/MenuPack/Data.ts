export interface Category {
  id: number;
  name: string;
  dishes?: Dishe[];
}
export interface Dishe {
  id: number;
  categoryId: number;
  name: string;
  shortDesc: string;
  description: string;
  image: string;
  price: number;
}

export const categories: Category[] = [
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

export const dishes: Dishe[] = [
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
  {
    id: 1,
    categoryId: 1,
    name: "Pasta",
    shortDesc: "Pasta is type of food typically made from an unleavened dough",
    description: "lorem if sum",
    image: "/img/pasta.png",
    price: 35,
  },
];
