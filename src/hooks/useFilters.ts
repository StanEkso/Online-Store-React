import { useCallback, useState } from "react";
import { FiltersOptions } from "../types/filters";
import { Product } from "../types/product";
import { useDebouncedValue } from "./useDebouncedValue";

export function useFilters() {
  const [filters, setFilters] = useState<FiltersOptions>({
    selectedColors: [],
  });
  const filtersDebounced = useDebouncedValue(filters);
  const filterFunction = useCallback(
    (A: Product) => {
      if (
        !filtersDebounced.selectedColors.includes(A.color) &&
        filtersDebounced.selectedColors.length
      )
        return false;
      if (
        filtersDebounced.minimalPrice &&
        A.price < filtersDebounced.minimalPrice
      )
        return false;
      if (
        filtersDebounced.maximumPrice &&
        A.price > filtersDebounced.maximumPrice
      )
        return false;
      return true;
    },
    [filtersDebounced]
  );
  return {
    filters,
    setFilters,
    filterFunction,
  };
}
