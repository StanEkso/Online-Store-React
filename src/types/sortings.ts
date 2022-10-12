import { Product } from "./product";

export type SortingFunction<T = number> = (A: T, B: T) => number;

export interface SortingType<T = Product> {
  type: string;
  fn: SortingFunction<T>;
  name: string;
}
