import { ProductColor } from "./color";

export interface FiltersOptions {
  selectedColors: Set<ProductColor>;
  minimalPrice?: number;
  maximumPrice?: number;
  searchValue: string;
}

export type FilterFunction<Type = number> = (A: Type) => boolean;
