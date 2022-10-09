import { Product } from "../../types/product";

export const sortByPriceAsc = (
  productA: Product,
  productB: Product
): number => {
  return productA.price - productB.price;
};
