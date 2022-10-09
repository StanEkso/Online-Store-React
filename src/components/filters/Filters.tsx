import React, { FC } from "react";
import { ProductColor } from "../../types/color";
import { FiltersOptions } from "../../types/filters";
import FilterByColor from "./FilterByColor";
import FilterByPrice from "./FilterByPrice";
import styles from "./Filters.module.scss";
type Props = {
  colors: ProductColor[];
  filters: FiltersOptions;
  setFilters: React.Dispatch<React.SetStateAction<FiltersOptions>>;
};

const Filters: FC<Props> = ({ colors, filters, setFilters }) => {
  return (
    <div className={styles.container}>
      <FilterByColor
        colors={colors}
        filters={filters}
        setFilters={setFilters}
      />
      <FilterByPrice
        colors={colors}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
};

export default React.memo(Filters);
