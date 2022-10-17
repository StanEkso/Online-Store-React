export type SortingFunction<Type = number> = (A: Type, B: Type) => number;

export interface SortingType<Type = number> {
  type: string;
  fn: SortingFunction<Type>;
  name: string;
}
export interface Sorting<Type = number> {
  fn: SortingFunction<Type>;
  name: string;
}
