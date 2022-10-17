import Recipes from "./Recipes";

const categories = [
  {
    id: 1,
    title: "All",
    recipes: Recipes,
  },
  {
    id: 2,
    title: "Hearty",
    recipes: [...Recipes.slice(4, 8)],
  },
  {
    id: 3,
    title: "Light",
    recipes: [...Recipes.slice(3, 7)],
  },
  {
    id: 4,
    title: "Breakfast",
    recipes: [...Recipes.slice(2, 6)],
  },
];

export default categories;
