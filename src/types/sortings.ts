export type SortingFunction<Type = number> = (A: Type, B: Type) => number;

export interface SortingType<Type = number> {
  fn: SortingFunction<Type>;
  name: string;
}
