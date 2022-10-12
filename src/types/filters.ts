import { ProductColor } from "./color";

export interface FiltersOptions {
  selectedColors: ProductColor[];
  minimalPrice?: number;
  maximumPrice?: number;
}

export type FilterFunction<Type = number> = (A: Type) => boolean;
