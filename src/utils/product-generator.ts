import {
  COLOR_ARRAY,
  MAXIMUM_PRICE,
  MAXIMUM_PRODUCT_RATING,
  MINIMAL_PRICE,
  MINIMAL_PRODUCT_RATING,
  PRODUCTS_TEMPLATES,
  RANDOM_WORDS_LIST,
} from "../constants";
import { ProductColor } from "../types/color";
import { Product, ProductMetadata } from "../types/product";
import { getRandomString, numberFromInterval, validatePositive } from "./utils";

export default function generateProducts(count: number): Product[] {
  return Array.from({ length: validatePositive(count) }).map(generateProduct);
}

const generateProduct = (): Product => ({
  id: generateId(),
  description: generateDescription(),
  color: generateColor(),
  price: generatePrice(),
  rating: generateRating(),
  ...generateMetadata(),
});

const generateId = (): string => Date.now() + getRandomString();

const generateDescription = (length = 10): string =>
  Array.from({ length: validatePositive(length) })
    .map(
      () =>
        RANDOM_WORDS_LIST[numberFromInterval(0, RANDOM_WORDS_LIST.length - 1)]
    )
    .join(" ");

const generateColor = (): ProductColor =>
  COLOR_ARRAY[numberFromInterval(0, COLOR_ARRAY.length - 1)];

const generatePrice = () => numberFromInterval(MINIMAL_PRICE, MAXIMUM_PRICE);

const generateRating = () =>
  numberFromInterval(MINIMAL_PRODUCT_RATING, MAXIMUM_PRODUCT_RATING);

const generateMetadata = (): ProductMetadata => {
  const { name, imageUrl } =
    PRODUCTS_TEMPLATES[numberFromInterval(0, PRODUCTS_TEMPLATES.length - 1)];
  return {
    name: name + " " + getRandomString(),
    imageUrl,
  };
};
