import React, { FC } from "react";
import { ProductColor } from "../../types/color";
import { FiltersOptions } from "../../types/filters";
import styles from "./Filters.module.scss";

type Props = {
  colors: ProductColor[];
  filters: FiltersOptions;
  setFilters: React.Dispatch<React.SetStateAction<FiltersOptions>>;
};

const FilterByColor: FC<Props> = ({ colors, filters, setFilters }) => {
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentColors = new Set(filters.selectedColors);
    currentColors.has(e.target.name as ProductColor)
      ? currentColors.delete(e.target.name as ProductColor)
      : currentColors.add(e.target.name as ProductColor);
    setFilters({
      ...filters,
      selectedColors: currentColors,
    });
  };
  return (
    <>
      <h4 className={styles.container__title}>По цвету</h4>
      {Array.from(colors).map((color, i) => (
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
    </>
  );
};

export default React.memo(FilterByColor);
