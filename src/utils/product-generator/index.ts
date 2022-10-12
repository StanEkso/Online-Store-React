import ImageAssets from "../../assets/images";
import { COLOR_ARRAY } from "../../constants/colors";
import { PRODUCT_NAMES_TEMPLATES } from "../../constants/names";
import {
  MAXIMUM_PRICE,
  MAXIMUM_PRODUCT_RATING,
  MINIMAL_PRICE,
  MINIMAL_PRODUCT_RATING,
} from "../../constants/product";
import { RANDOM_WORDS_LIST } from "../../constants/words";
import { ProductColor } from "../../types/color";
import { Product } from "../../types/product";
import numberFromInterval from "../numberFromInterval";
import getRandomString from "../randomString";

export default function generateProducts(count: number): Product[] {
  return [...new Array(count)].map(generateProduct);
}

const generateProduct = (): Product => {
  return {
    id: generateId(),
    name: generateName(),
    description: generateDescription(),
    color: generateColor(),
    price: generatePrice(),
    rating: generateRating(),
    imageUrl: generateImage("1"),
  };
};

const generateId = (): string => Date.now() + getRandomString();

const generateName = (): string => {
  return (
    PRODUCT_NAMES_TEMPLATES[
      numberFromInterval(0, PRODUCT_NAMES_TEMPLATES.length - 1)
    ] +
    " " +
    getRandomString()
  );
};

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

const generateImage = (name: string) => {
  return ImageAssets.sneakers;
};
