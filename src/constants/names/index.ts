import ImageAssets from "../../assets/images";
import { ProductMetadata } from "../../types/product";

export const PRODUCT_NAMES_TEMPLATES: string[] = [
  "Кроссовки",
  "Майка",
  "Свитшот",
  "Толстовка",
  "Ботинки",
  "Лоферы",
  "Кеды",
  "Туфли",
  "Полусапоги",
];

export const PRODUCT_NAMES_IMAGES: string[] = [
  ImageAssets.sneakers,
  ImageAssets.shirt,
];

export const PRODUCTS_TEMPLATES: ProductMetadata[] = [
  {
    name: "Кроссовки",
    imageUrl: ImageAssets.sneakers,
  },
  {
    name: "Майка",
    imageUrl: ImageAssets.shirt,
  },
  {
    name: "Свитшот",
    imageUrl: ImageAssets.sweatshirt,
  },
  {
    name: "Толстовка",
    imageUrl: ImageAssets.hoody,
  },
  {
    name: "Ботинки",
    imageUrl: ImageAssets.boots,
  },
];
