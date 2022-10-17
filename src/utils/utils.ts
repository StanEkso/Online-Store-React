export const numberFromInterval = (min: number, max: number): number =>
  min + Math.floor(Math.random() * (max - min + 1));

export const getRandomString = (): string =>
  Math.random().toString(36).slice(2);

export const validatePositive = (n: number) => (n > 0 ? n : 0);
