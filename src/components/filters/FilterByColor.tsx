import React, { FC, useCallback } from "react";
import { ProductColor } from "../../types/color";
import { FiltersOptions } from "../../types/filters";
import styles from "./Filters.module.scss";

type Props = {
  colors: ProductColor[];
  filters: FiltersOptions;
  setColors: (colors: Set<ProductColor>) => void;
};

const FilterByColor: FC<Props> = ({ colors, filters, setColors }) => {
  const handleChecked = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentColors = new Set(filters.selectedColors);
      currentColors.has(e.target.name as ProductColor)
        ? currentColors.delete(e.target.name as ProductColor)
        : currentColors.add(e.target.name as ProductColor);
      setColors(currentColors);
    },
    [filters, setColors]
  );
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
