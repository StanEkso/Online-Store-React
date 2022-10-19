import React, { FC, useCallback } from "react";
import { MAXIMUM_PRICE } from "../../constants";
import styles from "./Filters.module.scss";

interface FilterPriceProps {
  minimalPrice: number | undefined;
  maximumPrice: number | undefined;
  setMinMaxPrice: (object: {
    minimalPrice?: number;
    maximumPrice?: number;
  }) => void;
}

const FilterByPrice: FC<FilterPriceProps> = ({
  minimalPrice,
  maximumPrice,
  setMinMaxPrice,
}) => {
  const handlePrice = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMinMaxPrice({
        [e.target.name]: e.target.value,
      });
    },
    [setMinMaxPrice]
  );
  return (
    <>
      <h4 className={styles.container__title}>По цене</h4>
      <div className={styles.price}>
        <input
          className={styles.price__input}
          min={0}
          max={maximumPrice || MAXIMUM_PRICE}
          value={minimalPrice}
          type="number"
          name="minimalPrice"
          onChange={handlePrice}
          placeholder="от"
        />
        -
        <input
          className={styles.price__input}
          min={minimalPrice || 0}
          max={MAXIMUM_PRICE}
          value={maximumPrice}
          type="number"
          name="maximumPrice"
          onChange={handlePrice}
          placeholder="до"
        />
        BYN
      </div>
    </>
  );
};

export default React.memo(FilterByPrice);
