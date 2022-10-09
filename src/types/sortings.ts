import { Product } from "./product";

export type SorterFunction<T = number> = (A: T, B: T) => number;
export const emptySorter: SorterFunction<Product> = function () {
  return 0;
};

export interface SortingType {
  type: string;
  fn: SorterFunction<Product>;
  name: string;
}
