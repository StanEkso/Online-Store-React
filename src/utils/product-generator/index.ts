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
    imageUrl: "",
  };
};

const generateId = (): string => Date.now() + getRandomString();

const names: string[] = [
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

const generateName = (): string => {
  return names[numberFromInterval(0, names.length - 1)] + " " + getRandomString();
};

const randomWords = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet,",
  "consectetur",
  "adipiscing",
  "elit,",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua",
  "Ut",
];
const generateDescription = (length = 10): string => {
  return [...new Array(length > 0 ? length : 0)].map(
    () => randomWords[numberFromInterval(0, randomWords.length - 1)]
  ).join(" ");
};
const colorArray = [
    ProductColor.BLUE,
    ProductColor.RED,
    ProductColor.GREEN,
    ProductColor.LIGHTBLUE,
    ProductColor.PURPLE,
    ProductColor.YELLOW,
    ProductColor.BLACK,
    ProductColor.WHITE,
    ProductColor.PINK,
    ProductColor.GRAY,
  ];
const generateColor = (): ProductColor => {
    return colorArray[numberFromInterval(0, colorArray.length - 1)]
}

const generatePrice = () => {
    return numberFromInterval(10, 9999);
}

const generateRating = () => {
    return numberFromInterval(1, 100)
}