import {
  COLOR_ARRAY,
  MAXIMUM_PRICE,
  MAXIMUM_PRODUCT_RATING,
  MINIMAL_PRICE,
  MINIMAL_PRODUCT_RATING,
  PRODUCTS_TEMPLATES,
  RANDOM_WORDS_LIST,
} from "../../constants";
import { ProductColor } from "../../types/color";
import { Product, ProductMetadata } from "../../types/product";
import numberFromInterval from "../numberFromInterval";
import getRandomString from "../randomString";

export default function generateProducts(count: number): Product[] {
  return [...new Array(count)].map(generateProduct);
}

const generateProduct = (): Product => {
  const { name, imageUrl } = generateMetadata();
  return {
    id: generateId(),
    name,
    description: generateDescription(),
    color: generateColor(),
    price: generatePrice(),
    rating: generateRating(),
    imageUrl,
  };
};

const generateId = (): string => Date.now() + getRandomString();

const generateDescription = (length = 10): string => {
  return [...new Array(length > 0 ? length : 0)]
    .map(
      () =>
        RANDOM_WORDS_LIST[numberFromInterval(0, RANDOM_WORDS_LIST.length - 1)]
    )
    .join(" ");
};

const generateColor = (): ProductColor => {
  return COLOR_ARRAY[numberFromInterval(0, COLOR_ARRAY.length - 1)];
};

const generatePrice = () => {
  return numberFromInterval(MINIMAL_PRICE, MAXIMUM_PRICE);
};

const generateRating = () => {
  return numberFromInterval(MINIMAL_PRODUCT_RATING, MAXIMUM_PRODUCT_RATING);
};

const generateMetadata = (): ProductMetadata => {
  const { name, imageUrl } =
    PRODUCTS_TEMPLATES[numberFromInterval(0, PRODUCTS_TEMPLATES.length - 1)];
  return {
    name: name + " " + getRandomString(),
    imageUrl,
  };
};
