import React, { FC } from "react";
import { MAXIMUM_PRICE } from "../../constants/product";
import { ProductColor } from "../../types/color";
import { FiltersOptions } from "../../types/filters";
import styles from "./Filters.module.scss";
type Props = {
  colors: ProductColor[];
  filters: FiltersOptions;
  setFilters: React.Dispatch<React.SetStateAction<FiltersOptions>>;
};

const Filters: FC<Props> = ({ colors, filters, setFilters }) => {
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColors = filters.selectedColors.filter(
      (el) => el !== e.target.name
    );
    if (e.target.checked) selectedColors.push(e.target.name as ProductColor);
    setFilters((state) => ({
      ...state,
      selectedColors,
    }));
  };
  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters };
    if (!e.target.value) {
      switch (e.target.name) {
        case "minimalPrice":
          delete newFilters.minimalPrice;
          break;
        case "maximumPrice":
          delete newFilters.maximumPrice;
          break;
      }
      setFilters(newFilters);
    } else {
      setFilters({
        ...newFilters,
        [e.target.name]: +e.target.value,
      });
    }
  };
  return (
    <div className={styles.container}>
      <h4 className={styles.container__title}>По цвету</h4>
      {colors.map((color, i) => (
        <div className={styles.color__selector} key={i}>
          <input
            type="checkbox"
            name={color}
            id={`color_${i}`}
            onChange={handleChecked}
            className={styles.color__selector_checkbox}
          />
          <label htmlFor={`color_${i}`}></label>
          {color}
        </div>
      ))}
      <h4 className={styles.container__title}>По цене</h4>
      <div className={styles.price}>
        <input
          className={styles.price__input}
          min={0}
          type="number"
          name="minimalPrice"
          onChange={handlePrice}
          placeholder="от"
        />
        -
        <input
          className={styles.price__input}
          max={MAXIMUM_PRICE}
          type="number"
          name="maximumPrice"
          onChange={handlePrice}
          placeholder="до"
        />
      </div>
    </div>
  );
};

export default Filters;
