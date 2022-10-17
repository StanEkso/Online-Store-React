import React, { FC } from "react";
import { ProductColor } from "../../types/color";
import { FiltersOptions } from "../../types/filters";
import FilterByColor from "./FilterByColor";
import FilterByName from "./FilterByName";
import FilterByPrice from "./FilterByPrice";
type Props = {
  colors: ProductColor[];
  filters: FiltersOptions;
  setFilters: React.Dispatch<React.SetStateAction<FiltersOptions>>;
};

const Filters: FC<Props> = ({ colors, filters, setFilters }) => {
  const setSearchValue = (searchValue: string) => {
    setFilters((filters) => ({
      ...filters,
      searchValue,
    }));
  };
  return (
    <>
      <FilterByName value={filters.searchValue} setValue={setSearchValue} />
      <FilterByColor
        colors={colors}
        filters={filters}
        setFilters={setFilters}
      />
      <FilterByPrice filters={filters} setFilters={setFilters} />
    </>
  );
};

export default React.memo(Filters);
