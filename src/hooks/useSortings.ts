import { useCallback, useState } from "react";
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

const useSorting = (defaultValue: string) => {
  const [sorting, setSorting] = useState(defaultValue);
  return {
    sorting,
    setSorting,
    sortingFunction: useCallback(
      (A: Product, B: Product) => sortingTypes[sorting]?.fn(A, B) ?? 0,
      [sorting]
    ),
  };
};

export default useSorting;
