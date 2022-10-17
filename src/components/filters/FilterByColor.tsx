import React, { FC, useCallback } from "react";
import { ProductColor } from "../../types/color";
import styles from "./Filters.module.scss";

interface FilterColorProps {
  colors: ProductColor[];
  activeColors: Set<ProductColor>;
  setColors: (colors: Set<ProductColor>) => void;
}

const FilterByColor: FC<FilterColorProps> = ({
  colors,
  activeColors,
  setColors,
}) => {
  const handleChecked = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentColors = new Set(activeColors);
      currentColors.has(e.target.name as ProductColor)
        ? currentColors.delete(e.target.name as ProductColor)
        : currentColors.add(e.target.name as ProductColor);
      setColors(currentColors);
    },
    [activeColors, setColors]
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
            checked={activeColors.has(color)}
          />
          <label htmlFor={`color_${i}`}></label>
          {color}
        </div>
      ))}
    </>
  );
};

export default React.memo(FilterByColor);
