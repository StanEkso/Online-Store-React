import { Product } from "./product";

export type SorterFunction<T = number> = (A: T, B: T) => number;

export interface SortingType<T = Product> {
  type: string;
  fn: SorterFunction<T>;
  name: string;
}
