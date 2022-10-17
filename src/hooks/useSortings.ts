import { useCallback } from "react";
import { Product } from "../types/product";
import { SortingType } from "../types/sortings";

export const sortingTypes: Record<string, SortingType<Product>> = {
  "price/asc": {
    fn: (A, B) => A.price - B.price,
    name: "Сначала дешевые",
  },
  "price/desc": {
    fn: (A, B) => B.price - A.price,
    name: "Сначала дорогие",
  },
  "rating/desc": {
    fn: (A, B) => B.rating - A.rating,
    name: "Сначала популярные",
  },
};

const useSorting = (key: string) => {
  return useCallback(
    (A: Product, B: Product) => sortingTypes[key]?.fn(A, B) ?? 0,
    [key]
  );
};

export default useSorting;
