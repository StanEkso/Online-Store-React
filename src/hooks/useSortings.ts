import { useCallback, useState } from "react";
import { Product } from "../types/product";
import { SortingType } from "../types/sortings";
import { useDebouncedValue } from "./useDebouncedValue";

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

export const useSorting = (defaultValue: string) => {
  const [sorting, setSorting] = useState(defaultValue);
  const debouncedSorting = useDebouncedValue(sorting);
  return {
    sorting,
    setSorting,
    sortingFunction: useCallback(
      (A: Product, B: Product) => sortingTypes[debouncedSorting]?.fn(A, B) ?? 0,
      [debouncedSorting]
    ),
  };
};
