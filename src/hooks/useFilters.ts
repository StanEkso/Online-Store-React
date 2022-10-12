import { useCallback, useState } from "react";
import { ProductColor } from "../types/color";
import { FilterFunction, FiltersOptions } from "../types/filters";
import { Product } from "../types/product";
import { useDebouncedValue } from "./useDebouncedValue";

const filterByColors = (
  activeColors: ProductColor[]
): FilterFunction<Product> => {
  if (!activeColors.length) return () => true;
  return (A: Product) => activeColors.includes(A.color);
};

const filterByMinimalPrice = (
  minimalPrice: number | undefined
): FilterFunction<Product> => {
  if (!minimalPrice) return () => true;
  return (A: Product) => A.price >= minimalPrice;
};

const filterByMaximumPrice = (
  maximumPrice: number | undefined
): FilterFunction<Product> => {
  if (!maximumPrice) return () => true;
  return (A: Product) => A.price <= maximumPrice;
};

export function useFilters() {
  const [filters, setFilters] = useState<FiltersOptions>({
    selectedColors: [],
  });
  const filtersDebounced = useDebouncedValue(filters);
  const filterFunction = useCallback(
    (A: Product) => {
      const { selectedColors, minimalPrice, maximumPrice } = filtersDebounced;
      const currentFilters = [
        filterByColors(selectedColors),
        filterByMinimalPrice(minimalPrice),
        filterByMaximumPrice(maximumPrice),
      ];
      return currentFilters.every((filter) => filter(A));
    },
    [filtersDebounced]
  );
  return {
    filters,
    setFilters,
    filterFunction,
  };
}
