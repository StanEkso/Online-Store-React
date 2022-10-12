import { useCallback } from "react";
import { Product } from "../types/product";
import { SortingType } from "../types/sortings";

export const sortingTypes: SortingType<Product>[] = [
  {
    type: "price/asc",
    fn: (A, B) => A.price - B.price,
    name: "Сначала дешевые",
  },
  {
    type: "price/desc",
    fn: (A, B) => B.price - A.price,
    name: "Сначала дорогие",
  },
  {
    type: "rating/desc",
    fn: (A, B) => B.rating - A.rating,
    name: "Сначала популярные",
  },
];

const useSorting = (key: string) => {
  return useCallback(
    (...args: [Product, Product]) => {
      const sortingType = sortingTypes.find(({ type }) => type === key);
      if (sortingType) {
        return sortingType.fn(...args);
      }
      return 0;
    },
    [key]
  );
};

export default useSorting;
