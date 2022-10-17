import React, { FC } from "react";
import { MAXIMUM_PRICE } from "../../constants";
import { FiltersOptions } from "../../types/filters";
import styles from "./Filters.module.scss";

interface FilterPriceProps {
  filters: FiltersOptions;
  setFilters: React.Dispatch<React.SetStateAction<FiltersOptions>>;
}

const includeProperty = <T,>(prop: T, inc: boolean): T | undefined =>
  inc ? prop : undefined;

const FilterByPrice: FC<FilterPriceProps> = ({ filters, setFilters }) => {
  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: includeProperty(e.target.value, !!e.target.value),
    });
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
