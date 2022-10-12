import { ProductColor } from "./color";

export interface Product {
  id: string;
  name: string;
  description: string;
  color: ProductColor;
  price: number;
  rating: number;
  imageUrl: string;
}

export interface ProductMetadata {
  name: string;
  imageUrl: string;
}
