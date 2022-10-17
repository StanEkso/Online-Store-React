import { useMemo, useState } from "react";
import { ProductColor } from "../types/color";
import { FiltersOptions } from "../types/filters";
import { Product } from "../types/product";
import { useDebouncedValue } from "./useDebouncedValue";

const getProductColor = (A: Product) => A.color;
const getProductPrice = (A: Product) => A.price;
const getProductName = (A: Product) => A.name;

const filterFunctions = {
  includes:
    <T>(set: Set<T>, getValue: (value: any) => T = (value) => value) =>
    (value: any) =>
      set.has(getValue(value)),
  max:
    (pivot: number, getValue: (value: any) => number = (value) => value) =>
    (value: any) =>
      pivot >= getValue(value),
  min:
    (pivot: number, getValue: (value: any) => number = (value) => value) =>
    (value: any) =>
      pivot <= getValue(value),
  search:
    (
      searchValue: string,
      getValue: (value: any) => string = (value) => value
    ) =>
    (value: any) =>
      getValue(value).includes(searchValue),
  default: () => () => true,
};

export function useFilters() {
  const [filters, setFilters] = useState<FiltersOptions>({
    selectedColors: new Set<ProductColor>(),
    searchValue: "",
  });
  const { selectedColors, minimalPrice, maximumPrice, searchValue } =
    useDebouncedValue(filters);
  const filterFunction = useMemo(() => {
    const currentFilters = [
      selectedColors.size
        ? filterFunctions.includes(selectedColors, getProductColor)
        : filterFunctions.default(),
      minimalPrice
        ? filterFunctions.min(minimalPrice, getProductPrice)
        : filterFunctions.default(),
      maximumPrice
        ? filterFunctions.max(maximumPrice, getProductPrice)
        : filterFunctions.default(),
      searchValue
        ? filterFunctions.search(searchValue, getProductName)
        : filterFunctions.default(),
    ];
    return (A: Product) => currentFilters.every((f) => f(A));
  }, [selectedColors, minimalPrice, maximumPrice, searchValue]);
  return {
    filters,
    setFilters,
    filterFunction,
  };
}
