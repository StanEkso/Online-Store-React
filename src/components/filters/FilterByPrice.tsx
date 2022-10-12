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

const FilterByPrice: FC<Props> = ({ colors, filters, setFilters }) => {
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
    <>
      <h4 className={styles.container__title}>По цене</h4>
      <div className={styles.price}>
        <input
          className={styles.price__input}
          min={0}
          max={filters.maximumPrice || MAXIMUM_PRICE}
          type="number"
          name="minimalPrice"
          onChange={handlePrice}
          placeholder="от"
        />
        -
        <input
          className={styles.price__input}
          min={filters.minimalPrice || 0}
          max={MAXIMUM_PRICE}
          type="number"
          name="maximumPrice"
          onChange={handlePrice}
          placeholder="до"
        />
      </div>
    </>
  );
};

export default React.memo(FilterByPrice);
